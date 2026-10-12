import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessage } from '@/models/ContactMessage';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, subject, message) are required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

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
        message: 'Your message has been successfully saved to MongoDB.',
        data: { id: newMessage._id, createdAt: newMessage.createdAt },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Internal Server Error';
    console.error('Contact Form MongoDB Error:', errMsg);

    return NextResponse.json(
      {
        error: 'Unable to save message to database at this moment.',
        details: process.env.NODE_ENV === 'development' ? errMsg : undefined,
      },
      { status: 500 }
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
    return NextResponse.json({ status: 'Disconnected', error: errMsg }, { status: 500 });
  }
}
