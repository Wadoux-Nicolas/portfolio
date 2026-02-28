import React from 'react';
import { Locale } from 'use-intl';
import Welcome from '@/components/pages/welcome';
import About from '@/components/templates/about/about';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const {locale} = await params;

  return (
    <main>
      <Welcome locale={locale}/>
      <About/>
    </main>
  );
}