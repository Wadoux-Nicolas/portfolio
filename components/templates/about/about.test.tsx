import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import About from './about';

describe('About Template', () => {
  const defaultProps = {
    sectionId: 'about',
    sectionAriaLabel: 'About',
    title: 'About',
    stats: {
      age: {
        value: 24,
        unit: 'years',
        label: 'on Earth',
      },
      projects: {
        value: 18,
        unit: 'projects',
        label: 'crafted with passion',
      },
      experience: {
        value: 4,
        unit: 'years',
        label: 'of professional experience',
      },
    },
    presentation: [
      {
        content: 'Hello and welcome to my portfolio! As a Fullstack Developer, I thrive on contributing to meaningful projects.',
        strongWords: ['Fullstack Developer', 'meaningful projects'],
      },
      {
        content: 'Why this career? Because I love to understand and build with a clear purpose.',
        strongWords: ['I love to understand and build'],
      },
    ],
    languagesHobbies: {
      spokenLanguages: {
        sectionTitle: 'Spoken languages',
        languages: [
          {
            flag: 'fr' as const,
            languageName: 'French',
            level: 'Mother tongue',
          },
        ],
      },
      hobbies: {
        sectionTitle: 'What drives me',
        hobbies: [
          {
            icon: 'palm-tree' as const,
            label: 'Traveling',
          },
        ],
      },
    },
  };

  const renderAbout = (props = defaultProps) =>
    render(<About {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('Renders correctly and checks the about section attributes', () => {
    renderAbout();

    const section = screen.getByRole('region', { name: 'About' });
    expect(section).toBeInTheDocument();
    expect(section.ariaLabel).toBe('About');
  });
});
