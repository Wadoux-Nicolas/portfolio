import { beforeAll, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import frMessages from '@/messages/fr.json';
import About from '@/components/templates/about/about';

const renderWelcome = () =>
  render(
    <NextIntlClientProvider locale={'fr'} messages={frMessages}>
      <About/>
    </NextIntlClientProvider>,
  );

describe('About Template', () => {
  beforeAll(() => {
    renderWelcome();
  });

  test('Renders correctly and checks the about section attributes', () => {
    const section = screen.getByRole('region', {name: frMessages.Navigation.about});

    expect(section).toBeInTheDocument();
    expect(section.ariaLabel).toBe(frMessages.Navigation.about);
  });
});