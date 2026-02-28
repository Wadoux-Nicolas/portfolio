import { beforeAll, describe, expect, test } from 'vitest';
import ScrollIndicator from '@/components/atoms/scroll-indicator/scroll-indicator';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import frMessages from '@/messages/fr.json';

describe('ScrollIndicator Atom', () => {
  const renderScrollIndicator = () =>
    render(
      <NextIntlClientProvider locale={'fr'} messages={frMessages}>
        <ScrollIndicator/>
      </NextIntlClientProvider>,
    );

  beforeAll(() => {
    renderScrollIndicator();
  });

  test('Renders a button with correct accessibility label and type', () => {
    const button = screen.getByRole('link', {name: frMessages.Actions.scrollDown});

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', frMessages.Actions.scrollDown);
  });

  test('Renders the inner animated indicator element', () => {
    const innerDiv = document.querySelector('a div.animate-bounce');

    expect(innerDiv).toBeInTheDocument();
  });

  test('Link has cursor and pointer style classes', () => {
    const button = screen.getByRole('link');

    expect(button).toHaveClass('cursor-pointer');
  });
});