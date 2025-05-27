import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';

import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host');
  const isConsolexHost = host === 'consolex.ink';
  const title = isConsolexHost
    ? 'Consolex - Next Generation AI Platform'
    : 'EvalsOne - Next Generation AI Platform';

  return {
    title,
    description:
      'The most advanced AI platform for accurate and reliable results',
    keywords: ['AI', 'platform', 'machine learning', 'artificial intelligence'],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const host = headersList.get('host');
  const isConsolexHost = host === 'consolex.ink';
  const title = isConsolexHost
    ? 'Consolex - Next Generation AI Platform'
    : 'EvalsOne - Next Generation AI Platform';

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={isConsolexHost ? '/favicon-cx.ico' : '/favicon.ico'}
          type="image/x-icon"
        />
        <title>{title}</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
