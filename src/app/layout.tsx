import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume Portal Pro | Moises B. Ballesca Jr.',
  description: 'Multi-Niche Resume & Professional Portfolio Builder with PDF/Word Export',
  keywords: ['resume', 'portfolio', 'ecommerce', 'virtual assistant', 'job seeker'],
  authors: [{ name: 'Moises B. Ballesca Jr.' }],
  viewport: 'width=device-width, initial-scale=1.0',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-slate-900 text-white">{children}</body>
    </html>
  );
}
