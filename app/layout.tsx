import './globals.css';

import type { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://todisoa.dev'),

  title: 'Todisoa Herinjanahary | Fullstack JavaScript Developer',

  description: 'Développeur Fullstack JS spécialisé React, Next.js, NestJS et Node.js.',

  keywords: ['React', 'NextJS', 'NestJS', 'NodeJS', 'Fullstack', 'JavaScript'],

  openGraph: {
    title: 'Todisoa Herinjanahary',

    description: 'Portfolio Fullstack Developer',

    images: ['/og-image.png'],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
