import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import SpokenLanguages from './spoken-languages';
import enMessages from '@/messages/en.json';

describe('SpokenLanguages Organism', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the section with the correct title', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const title = screen.getByText(enMessages.About.spokenLanguages);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-secondary');
  });

  test('renders three language flag items', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('renders French language information correctly', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const flag = screen.getByAltText(enMessages.Languages.french);
    expect(flag).toHaveAttribute('src', expect.stringContaining('fr.svg'));
    expect(screen.getByText(enMessages.About.frenchMotherTongue)).toBeInTheDocument();
  });

  test('renders English language information with multiple lines', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const flag = screen.getByAltText(enMessages.Languages.english);
    expect(flag).toHaveAttribute('src', expect.stringContaining('gb.svg'));
    expect(screen.getByText(enMessages.About.englishB2)).toBeInTheDocument();
    expect(screen.getByText(enMessages.About.englishToiec)).toBeInTheDocument();
  });

  test('renders Spanish language information correctly', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const flag = screen.getByAltText(enMessages.Languages.spanish);
    expect(flag).toHaveAttribute('src', expect.stringContaining('es.svg'));
    expect(screen.getByText(enMessages.About['spanishB1+'])).toBeInTheDocument();
  });

  test('applies responsive flex classes to the list', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SpokenLanguages/>
      </NextIntlClientProvider>,
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex flex-wrap sm:flex-nowrap justify-center gap-8 md:gap-16');
  });
});