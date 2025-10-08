import { beforeAll, describe, expect, test, vi } from 'vitest';
import Welcome from '@/components/templates/welcome';
import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import frMessages from '@/messages/fr.json';

// Mock children components to isolate tests
vi.mock('@/components/organisms/contact-me-and-socials', () => ({
  default: () => <div data-testid="mock-contact-me-and-socials"/>,
}));
vi.mock('@/components/organisms/welcome-blobs-background', () => ({
  default: () => <div data-testid="mock-welcome-blobs-background"/>,
}));
vi.mock('@/components/atoms/scroll-indicator', () => ({
  default: () => <div data-testid="mock-scroll-indicator"/>,
}));

const renderWelcome = () =>
  render(
    <NextIntlClientProvider locale={'fr'} messages={frMessages}>
      <Welcome/>
    </NextIntlClientProvider>,
  );

describe('Welcome Component', () => {

  beforeAll(() => {
    renderWelcome();
  });

  test('Renders correctly and checks the main section attributes', () => {
    const section = screen.getByRole('region', {name: frMessages.Navigation.home});

    expect(section).toBeInTheDocument();
    expect(section.ariaLabel).toBe(frMessages.Navigation.home);
  });

  test('Renders all child components', () => {
    expect(screen.getByTestId('mock-welcome-blobs-background')).toBeInTheDocument();
    expect(screen.getByTestId('mock-contact-me-and-socials')).toBeInTheDocument();
    expect(screen.getByTestId('mock-scroll-indicator')).toBeInTheDocument();
  });
  
  test('Displays translated and structured text for the job title', () => {
    expect(screen.getByText(frMessages.Welcome.greeting)).toBeInTheDocument();

    const h1Element = screen.getByRole('heading', {level: 1});
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('Nicolas Wadoux, Développeur Fullstack Web et Mobile');
  });
});