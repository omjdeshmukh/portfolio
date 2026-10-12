import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessage } from '@/models/ContactMessage';
import fs from 'fs';
import path from 'path';

// Local storage fallback for messages when database is unreachable
function saveMessageLocally(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  userAgent: string;
  createdAt: string;
  dbError?: string;
}) {
  try {
    const dataDir = path.resolve(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, 'messages.json');
    let messages = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        messages = JSON.parse(fileContent) || [];
      } catch {
        messages = [];
      }
    }
    messages.push(data);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to write message locally:', err);
    return false;
  }
}

export async function POST(req: NextRequest) {
  const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const userAgent = req.headers.get('user-agent') || 'unknown';

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { name, email, subject, message } = body || {};

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields (name, email, subject, message) are required.' },
      { status: 400 }
    );
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  // Attempt to save to MongoDB Atlas
  try {
    await connectToDatabase();

    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
      ip: clientIp,
      userAgent,
      read: false,
    });

    return NextResponse.json(
      {
        success: true,
        storage: 'mongodb',
        message: 'Thank you! Your message has been saved to the database.',
        id: newMessage._id,
      },
      { status: 200 }
    );
  } catch (dbError: unknown) {
    const errMsg = dbError instanceof Error ? dbError.message : 'Database error';
    console.warn('MongoDB connection unavailable. Using resilient local fallback:', errMsg);

    // Persist to local backup so the message is never lost
    saveMessageLocally({
      name,
      email,
      subject,
      message,
      ip: clientIp,
      userAgent,
      createdAt: new Date().toISOString(),
      dbError: errMsg,
    });

    // Return success to the client with advisory note
    return NextResponse.json(
      {
        success: true,
        storage: 'local-backup',
        message: 'Thank you! Your message has been received.',
        dbNotice: 'Database offline/authenticating. Message preserved locally.',
      },
      { status: 200 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const count = await ContactMessage.countDocuments();
    return NextResponse.json({
      status: 'Connected to MongoDB Atlas',
      messagesCount: count,
    });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Database offline';

    // Check how many messages are in local backup
    let localCount = 0;
    try {
      const filePath = path.resolve(process.cwd(), 'data/messages.json');
      if (fs.existsSync(filePath)) {
        const msgs = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        localCount = Array.isArray(msgs) ? msgs.length : 0;
      }
    } catch {
      // ignore
    }

    return NextResponse.json(
      {
        status: 'Database Authentication Pending',
        error: errMsg,
        localBackupMessagesCount: localCount,
        help: 'Ensure database user is created in MongoDB Atlas -> Security -> Database Access',
      },
      { status: 200 }
    );
  }
}
