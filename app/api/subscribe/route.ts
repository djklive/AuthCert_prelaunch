import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import NewsletterConfirmation from '../../../components/emails/newsletter-subscription-a80cf0';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Fonction pour valider l'email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    // Validation de l'email
    if (!email) {
      return NextResponse.json({ error: 'Email manquant' }, { status: 400 });
    }
    
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 });
    }

    // Ajouter le contact à l'audience Resend
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    // Préparer les données pour l'email
    const emailData = {
      subscriberEmail: email,
      subscriberName: email.split('@')[0], // Utilise la partie avant @ comme nom
      subscriptionDate: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
    };

    // Envoyer l'email de confirmation à l'utilisateur
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: [email],
      subject: 'Merci pour votre inscription à notre newsletter !',
      react: NewsletterConfirmation(emailData),
      text: NewsletterConfirmation.Text(emailData), // Version texte pour l'accessibilité
    });

    // Envoyer une notification à l'administrateur (optionnel)
    if (process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: [process.env.ADMIN_EMAIL],
        subject: 'Nouvel abonné à la newsletter',
        html: `
          <div>
            <h2>Nouvel abonné</h2>
            <p>Email: ${email}</p>
            <p>Date: ${new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        `,
        text: `Nouvel abonné\nEmail: ${email}\nDate: ${new Date().toLocaleDateString('fr-FR')}`,
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Inscription réussie ! Vérifiez votre email.' 
    });

  } catch (err: any) {
    console.error('Erreur lors de l\'inscription:', err);
    
    // Gestion d'erreurs spécifiques
    if (err.message?.includes('already exists')) {
      return NextResponse.json({ 
        error: 'Cet email est déjà inscrit à notre newsletter' 
      }, { status: 409 });
    }
    
    if (err.message?.includes('invalid')) {
      return NextResponse.json({ 
        error: 'Email invalide' 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      error: 'Erreur lors de l\'inscription. Veuillez réessayer.' 
    }, { status: 500 });
  }
}
