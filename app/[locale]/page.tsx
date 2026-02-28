import React from 'react';
import { Locale } from 'use-intl';
import Welcome from '@/components/pages/welcome';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const {locale} = await params;

  return (
    <main>
      <Welcome locale={locale}/>
    </main>
  );
}