const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...rest] = trimmed.split('=');
        if (key && rest.length) {
          process.env[key.trim()] = rest.join('=').trim();
        }
      }
    });
  }
}

loadEnv();

const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://omportfolio:123456%40Om@cluster0.dgpv7aj.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

const ContactMessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
    ip: String,
    userAgent: String,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ContactMessage =
  mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema);

async function syncMessages() {
  const messagesFile = path.resolve(__dirname, '../data/messages.json');
  if (!fs.existsSync(messagesFile)) {
    console.log('No local messages file found.');
    return;
  }

  const raw = fs.readFileSync(messagesFile, 'utf8');
  let messages = [];
  try {
    messages = JSON.parse(raw);
  } catch {
    console.error('Invalid JSON in messages.json');
    return;
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    console.log('No pending local messages to sync.');
    return;
  }

  console.log(`Connecting to MongoDB to sync ${messages.length} messages...`);
  await mongoose.connect(uri);

  for (const item of messages) {
    await ContactMessage.create({
      name: item.name,
      email: item.email,
      subject: item.subject,
      message: item.message,
      ip: item.ip,
      userAgent: item.userAgent,
    });
  }

  console.log(`Successfully synced ${messages.length} messages to MongoDB Atlas!`);
  await mongoose.disconnect();
}

syncMessages().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
