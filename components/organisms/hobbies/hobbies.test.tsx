import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Hobbies from './hobbies';
import enMessages from '@/messages/en.json';

describe('Hobbies Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the section title correctly', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Hobbies/>
      </NextIntlClientProvider>,
    );

    const title = screen.getByText(enMessages.About.whatDrivesMe);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-secondary text-center');
  });

  test('renders the correct number of hobby items', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Hobbies/>
      </NextIntlClientProvider>,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  test('renders all specific hobby texts', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Hobbies/>
      </NextIntlClientProvider>,
    );

    expect(screen.getByText(enMessages.About.visitingAndTraveling)).toBeInTheDocument();
    expect(screen.getByText(enMessages.About.playViolin)).toBeInTheDocument();
    expect(screen.getByText(enMessages.About.cookingAndBaking)).toBeInTheDocument();
    expect(screen.getByText(enMessages.About.doingSports)).toBeInTheDocument();
  });

  test('applies responsive flex classes to the list container', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Hobbies/>
      </NextIntlClientProvider>,
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex gap-x-8 gap-y-4 flex-wrap sm:flex-nowrap justify-center');
  });
});