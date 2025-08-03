import type { Metadata, Viewport } from 'next';
import { Itim, Roboto_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Portfolio | Nicolas Wadoux - Développeur fullstack',
  authors: [{name: 'Nicolas Wadoux'}],
  description: 'Portfolio de Nicolas Wadoux. Développeur fullstack, web et mobile. Spécialiste Javascript, Typescript, Angular, PHP, Laravel, SQL.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'normal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${itim.variable} ${roboto_mono.variable} font-sans antialiased`}>
    <body>
      {children}
    </body>
    </html>
  );
}
