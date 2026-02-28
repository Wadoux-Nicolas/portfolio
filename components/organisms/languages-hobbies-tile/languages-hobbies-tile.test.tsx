import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import LanguagesHobbiesTile from './languages-hobbies-tile';
import enMessages from '@/messages/en.json';

describe('LanguagesHobbiesTile Organism', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the main container with correct background and padding classes', () => {
    const {container} = render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <LanguagesHobbiesTile/>
      </NextIntlClientProvider>,
    );
    const mainDiv = container.firstChild as HTMLElement;

    expect(mainDiv).toHaveClass('bg-tertiary/20 rounded-4xl px-16 py-8 relative overflow-hidden');
  });

  test('renders the background wrapper with correct positioning and z-index', () => {
    const {container} = render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <LanguagesHobbiesTile/>
      </NextIntlClientProvider>,
    );
    const backgroundWrapper = container.querySelector('.-z-1');

    expect(backgroundWrapper).toBeInTheDocument();
    expect(backgroundWrapper).toHaveClass('absolute top-0 bottom-0 left-0 right-0');
  });

  test('renders both SpokenLanguages and Hobbies components', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <LanguagesHobbiesTile/>
      </NextIntlClientProvider>,
    );

    expect(screen.getByText(enMessages.About.spokenLanguages)).toBeInTheDocument();
    expect(screen.getByText(enMessages.About.whatDrivesMe)).toBeInTheDocument();
  });

  test('applies correct layout classes for responsiveness', () => {
    const {container} = render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <LanguagesHobbiesTile/>
      </NextIntlClientProvider>,
    );
    const contentWrapper = container.querySelector('.flex.gap-4');

    expect(contentWrapper).toHaveClass('flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center');
  });
});