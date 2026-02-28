import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import frMessages from '@/messages/fr.json';
import AboutItems from './about-items';

describe('AboutItems Organism', () => {
  const renderAboutItems = () =>
    render(
      <NextIntlClientProvider locale="fr" messages={frMessages}>
        <AboutItems/>
      </NextIntlClientProvider>,
    );

  beforeEach(() => {
    // Fake time to January 1st 2026 to have consistent results when testing
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-01'));
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  test('renders all items with correct values and translated labels', () => {
    renderAboutItems();

    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.age.label)).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.age.unit)).toBeInTheDocument();

    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.projects.label)).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.projects.unit)).toBeInTheDocument();

    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.experience.label)).toBeInTheDocument();
    expect(screen.getByText(frMessages.About.stats.experience.unit)).toBeInTheDocument();
  });

  test('renders vertical separators between items', () => {
    renderAboutItems();

    const separators = screen.getAllByRole('separator');
    expect(separators).toHaveLength(2);
  });
});