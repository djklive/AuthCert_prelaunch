import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function saveContact(email: string) {
  if (!email) throw new Error('Email is required');

  try {
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });
} catch (error) {
    console.error('Error saving contact:', error);
    throw new Error('Failed to save contact');
  }
}