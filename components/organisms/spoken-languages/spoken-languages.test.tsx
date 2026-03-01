import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import SpokenLanguages from './spoken-languages';

describe('SpokenLanguages Organism', () => {
  const defaultProps = {
    sectionTitle: 'Spoken languages',
    languages: [
      {
        flag: 'fr' as const,
        languageName: 'French',
        level: 'Mother tongue',
      },
      {
        flag: 'gb' as const,
        languageName: 'English',
        level: 'B2',
        extraInfo: 'TOIEC 890',
      },
      {
        flag: 'es' as const,
        languageName: 'Spanish',
        level: 'B1+',
      },
    ],
  };

  const renderSpokenLanguages = (props = defaultProps) =>
    render(<SpokenLanguages {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('renders the section with the correct title', () => {
    renderSpokenLanguages();

    const title = screen.getByText('Spoken languages');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-secondary');
  });

  test('renders three language flag items', () => {
    renderSpokenLanguages();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('renders French language information correctly', () => {
    renderSpokenLanguages();

    const flag = screen.getByAltText('French');
    expect(flag).toHaveAttribute('src', expect.stringContaining('fr.svg'));
    expect(screen.getByText('Mother tongue')).toBeInTheDocument();
  });

  test('renders English language information with multiple lines', () => {
    renderSpokenLanguages();

    const flag = screen.getByAltText('English');
    expect(flag).toHaveAttribute('src', expect.stringContaining('gb.svg'));
    expect(screen.getByText('B2')).toBeInTheDocument();
    expect(screen.getByText('TOIEC 890')).toBeInTheDocument();
  });

  test('renders Spanish language information correctly', () => {
    renderSpokenLanguages();

    const flag = screen.getByAltText('Spanish');
    expect(flag).toHaveAttribute('src', expect.stringContaining('es.svg'));
    expect(screen.getByText('B1+')).toBeInTheDocument();
  });

  test('applies responsive flex classes to the list', () => {
    renderSpokenLanguages();

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex flex-wrap sm:flex-nowrap justify-center gap-8 md:gap-16');
  });
});
