import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AuthCert",
  description: "AuthCert est une plateforme de certification blockchain qui permet de certifier des documents de manière sécurisée et transparente.",
  icons: {
    icon: [
      {
        url: '/Logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        url: '/Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    shortcut: '/Logo.svg',
    apple: '/Logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/Logo (1).png" type="image/png" />
        <link rel="apple-touch-icon" href="/Logo (1).png" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
