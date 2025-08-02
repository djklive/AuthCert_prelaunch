import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendEmails(email: string) {
  if (!email) throw new Error('Email is required');

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [email],
      subject: 'Merci pour votre inscription !',
      html: `
        <div>
          <h1>Merci de vous être inscrit(e) !</h1>
          <p>Vous serez informé dès la sortie du projet.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}