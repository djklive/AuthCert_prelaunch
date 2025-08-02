import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
  Button,
  Img,
} from '@react-email/components';

const NewsletterConfirmation = (props) => {
  const { subscriberEmail, subscriberName, subscriptionDate } = props;

  return (
    <Html lang="fr" dir="ltr">
      <Head />
      <Preview>Bienvenue ! Votre inscription à notre newsletter a été confirmée</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans py-[40px]">
          <Container
            className="bg-white mx-auto p-[40px] max-w-[600px] rounded-[12px] shadow-lg">
            
            {/* Header avec logo */}
            <Section className="text-center mb-[32px]">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-[24px] rounded-[12px]">
                <Heading className="text-[28px] font-bold m-0">
                  🎉 Bienvenue !
                </Heading>
                <Text className="text-[16px] m-0 mt-2 opacity-90">
                  Votre inscription a été confirmée
                </Text>
              </div>
            </Section>

            {/* Contenu principal */}
            <Section>
              <Text className="text-[18px] text-gray-900 mb-[24px] leading-[28px]">
                Bonjour {subscriberName},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Nous sommes ravis de vous accueillir dans notre communauté ! Votre inscription à notre newsletter a été confirmée avec succès.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Vous recevrez désormais nos dernières actualités, mises à jour et informations exclusives directement dans votre boîte mail.
              </Text>

              {/* Détails de l'inscription */}
              <Section
                className="bg-gray-50 p-[24px] rounded-[8px] mb-[24px] border border-gray-200">
                <Text className="text-[16px] font-semibold text-gray-900 mb-[16px] m-0">
                  📧 Détails de votre inscription
                </Text>
                
                <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                  <strong>Email :</strong> {subscriberEmail}
                </Text>
                
                <Text className="text-[14px] text-gray-600 mb-[8px] m-0">
                  <strong>Date d'inscription :</strong> {subscriptionDate}
                </Text>
                
                <Text className="text-[14px] text-gray-600 m-0">
                  <strong>Statut :</strong> <span className="text-green-600 font-semibold">Actif</span>
                </Text>
              </Section>

              {/* À quoi s'attendre */}
              <Section
                className="bg-orange-50 p-[24px] rounded-[8px] mb-[32px] border border-orange-200">
                <Text className="text-[16px] font-semibold text-orange-800 mb-[12px] m-0">
                  🚀 Ce que vous allez recevoir
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[8px] m-0">
                  • Les dernières innovations en matière de blockchain
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[8px] m-0">
                  • Des conseils sur la sécurité des certificats
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[8px] m-0">
                  • Des mises à jour sur nos nouveaux produits
                </Text>
                <Text className="text-[14px] text-orange-700 m-0">
                  • Des offres exclusives réservées à nos abonnés
                </Text>
              </Section>

              {/* Bouton d'action */}
              <Section className="text-center mb-[32px]">
                <Button
                  href="https://votre-site.com"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border transition-colors">
                  Découvrir notre plateforme
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                Merci de nous faire confiance. Nous nous engageons à vous fournir un contenu de qualité et à respecter votre vie privée.
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer */}
            <Section className="text-center">
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                <strong>Certificats Blockchain Sécurisés</strong>
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                Émission sécurisée et traçabilité 100% blockchain
              </Text>
              <Text className="text-[12px] text-gray-500 mb-[8px] m-0">
                Douala, Cameroun
              </Text>
              <Text className="text-[12px] text-gray-500 m-0">
                © 2025 Certificats Blockchain. Tous droits réservés.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// Version texte pour l'accessibilité
NewsletterConfirmation.Text = (props) => {
  const { subscriberEmail, subscriberName, subscriptionDate } = props;
  
  return `
🎉 Bienvenue !

Bonjour ${subscriberName},

Nous sommes ravis de vous accueillir dans notre communauté ! Votre inscription à notre newsletter a été confirmée avec succès.

Vous recevrez désormais nos dernières actualités, mises à jour et informations exclusives directement dans votre boîte mail.

📧 Détails de votre inscription :
- Email : ${subscriberEmail}
- Date d'inscription : ${subscriptionDate}
- Statut : Actif

🚀 Ce que vous allez recevoir :
• Les dernières innovations en matière de blockchain
• Des conseils sur la sécurité des certificats
• Des mises à jour sur nos nouveaux produits
• Des offres exclusives réservées à nos abonnés

Découvrir notre plateforme : https://votre-site.com

Merci de nous faire confiance. Nous nous engageons à vous fournir un contenu de qualité et à respecter votre vie privée.

---
Certificats Blockchain Sécurisés
Émission sécurisée et traçabilité 100% blockchain
Douala, Cameroun
© 2025 Certificats Blockchain. Tous droits réservés.
  `;
};

NewsletterConfirmation.PreviewProps = {
  subscriberEmail: "frckdjoko@gmail.com",
  subscriberName: "Frédéric",
  subscriptionDate: "1er août 2025",
};

export default NewsletterConfirmation;