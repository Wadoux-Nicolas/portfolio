import { expect, test } from 'vitest';
import Welcome from '@/components/templates/welcome';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import frMessages from '@/messages/fr.json';

test('Welcome Template', () => {
  render(
    <NextIntlClientProvider locale={'fr'} messages={frMessages}>
      <Welcome/>
    </NextIntlClientProvider>);

  const section = document.querySelector('section');

  expect(section).toBeDefined();
  expect(section!.ariaLabel).toBe('Accueil');
});