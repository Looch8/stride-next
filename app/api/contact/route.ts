import { NextResponse } from 'next/server';

import { sendEmail } from '@/lib/email';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  preferredContactMethod?: 'email' | 'phone' | 'either';
  message?: string;
  website?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = normalize(body.name);
  const email = normalize(body.email);
  const phone = normalize(body.phone);
  const preferredContactMethod = normalize(body.preferredContactMethod);
  const message = normalize(body.message);
  const website = normalize(body.website);

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    phone.length > 40 ||
    message.length > 5000 ||
    !isValidEmail(email)
  ) {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  if (
    preferredContactMethod !== 'email' &&
    preferredContactMethod !== 'phone' &&
    preferredContactMethod !== 'either'
  ) {
    return NextResponse.json(
      { error: 'Preferred contact method is invalid.' },
      { status: 400 },
    );
  }

  const text = [
    'New contact enquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Preferred contact method: ${preferredContactMethod}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    await sendEmail({
      subject: `New contact enquiry - ${name}`,
      text,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form send failed', error);
    return NextResponse.json(
      { error: 'Unable to send message right now.' },
      { status: 500 },
    );
  }
}
