import type { Metadata, Viewport } from 'next';
import { Itim, Roboto_Mono } from 'next/font/google';
import './globals.css';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Locale } from '@/i18n/routing';

type RootLayoutPropsParam = {
  locale: Locale
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<RootLayoutPropsParam>;
}>

const itim = Itim({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-itim',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'normal',
};

export async function generateMetadata({params}: RootLayoutProps): Promise<Metadata> {
  const {locale} = await params;
  const translate = await getTranslations({locale, namespace: 'Meta'});

  return {
    title: translate('title'),
    authors: [{name: 'Nicolas Wadoux'}],
    description: translate('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const {locale} = await params;
  return (
    <html lang={locale} className={`${itim.variable} ${roboto_mono.variable} font-sans antialiased`}>
    <body>
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </body>
    </html>
  );
}
