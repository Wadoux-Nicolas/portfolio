import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import About, { AboutProps } from './about';

describe('About Template', () => {
  const defaultProps: AboutProps = {
    sectionId: 'about',
    sectionAriaLabel: 'About',
    title: 'About',
    stats: {
      items: [{
        value: 24,
        unit: 'years',
        label: 'on Earth',
      },
        {
          value: 18,
          unit: 'projects',
          label: 'crafted with passion',
        },
        {
          value: 4,
          unit: 'years',
          label: 'of professional experience',
        }],
    },
    presentations: [
      <p key='hello'>Hello</p>,
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

    const section = screen.getByRole('region', {name: 'About'});
    expect(section).toBeInTheDocument();
    expect(section.ariaLabel).toBe('About');
  });
});
