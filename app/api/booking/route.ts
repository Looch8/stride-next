import { NextResponse } from 'next/server';

import { sendEmail } from '@/lib/email';

type BookingPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  reason?: string;
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
  let body: BookingPayload;

  try {
    body = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const fullName = normalize(body.fullName);
  const phone = normalize(body.phone);
  const email = normalize(body.email);
  const suburb = normalize(body.suburb);
  const reason = normalize(body.reason);
  const website = normalize(body.website);

  if (website) {
    return NextResponse.json({ success: true });
  }

  if (!fullName || !phone) {
    return NextResponse.json(
      { error: 'Full name and phone are required.' },
      { status: 400 },
    );
  }

  if (
    fullName.length > 120 ||
    phone.length > 40 ||
    suburb.length > 120 ||
    reason.length > 5000 ||
    (email && !isValidEmail(email))
  ) {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const text = [
    'New booking request',
    '',
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email || 'Not provided'}`,
    `Suburb: ${suburb || 'Not provided'}`,
    '',
    'Reason for visit:',
    reason || 'Not provided',
  ].join('\n');

  try {
    await sendEmail({
      subject: `New booking request - ${fullName}`,
      text,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking form send failed', error);
    return NextResponse.json(
      { error: 'Unable to send booking request right now.' },
      { status: 500 },
    );
  }
}
