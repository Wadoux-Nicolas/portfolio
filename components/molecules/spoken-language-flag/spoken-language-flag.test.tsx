import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import SpokenLanguageFlag from './spoken-language-flag';

describe('SpokenLanguageFlag Molecule', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders a figure and a figcaption', () => {
    render(
      <SpokenLanguageFlag flag="fr" alt="French flag">
        French
      </SpokenLanguageFlag>,
    );

    const figure = screen.getByRole('figure');
    const caption = screen.getByText('French');

    expect(figure).toBeInTheDocument();
    expect(caption.tagName).toBe('FIGCAPTION');
    expect(screen.getByText('French')).toBeInTheDocument();
  });

  test('renders the flag image with correct source and alt text', () => {
    render(
      <SpokenLanguageFlag flag="gb" alt="UK flag">
        English
      </SpokenLanguageFlag>,
    );

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', expect.stringContaining('gb.svg'));
    expect(img).toHaveAttribute('alt', 'UK flag');
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  test('applies layout classes to the figure element', () => {
    render(
      <SpokenLanguageFlag flag="gb" alt="UK flag">
        English
      </SpokenLanguageFlag>,
    );

    const figure = screen.getByRole('figure');

    expect(figure).toHaveClass('w-20 text-center gap-2 flex flex-col justify-center items-center');
  });

  test('applies specific styling classes to the flag image', () => {
    render(
      <SpokenLanguageFlag flag="gb" alt="UK flag">
        English
      </SpokenLanguageFlag>,
    );

    const img = screen.getByRole('img');

    expect(img).toHaveClass('w-14 h-9 md:w-20 md:h-12 object-cover rounded-lg');
  });

  test('applies correct leading class to the figcaption', () => {
    render(
      <SpokenLanguageFlag flag="gb" alt="UK flag">
        English
      </SpokenLanguageFlag>,
    );

    const caption = screen.getByText('English');

    expect(caption).toHaveClass('leading-none');
  });
});