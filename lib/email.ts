const RESEND_API_URL = 'https://api.resend.com/emails';

type SendEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function sendEmail({
  subject,
  text,
  replyTo,
}: SendEmailInput): Promise<void> {
  const apiKey = getRequiredEnv('RESEND_API_KEY');
  const from = getRequiredEnv('RESEND_FROM_EMAIL');
  const to = process.env.CONTACT_INBOX_EMAIL ?? from;

  const payload: {
    from: string;
    to: string[];
    subject: string;
    text: string;
    reply_to?: string;
  } = {
    from,
    to: [to],
    subject,
    text,
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend API error (${response.status}): ${details}`);
  }
}
