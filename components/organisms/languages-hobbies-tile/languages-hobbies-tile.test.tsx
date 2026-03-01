import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import LanguagesHobbiesTile from './languages-hobbies-tile';

describe('LanguagesHobbiesTile Organism', () => {
  const defaultProps = {
    spokenLanguages: {
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
        },
        {
          flag: 'es' as const,
          languageName: 'Spanish',
          level: 'B1+',
        },
      ],
    },
    hobbies: {
      sectionTitle: 'What drives me',
      hobbies: [
        {
          icon: 'palm-tree' as const,
          label: 'Visiting and traveling',
        },
        {
          icon: 'violin' as const,
          label: 'Play violin',
        },
        {
          icon: 'cook' as const,
          label: 'Cooking and baking',
        },
        {
          icon: 'badminton' as const,
          label: 'Doing sports',
        },
      ],
    },
  };

  const renderLanguagesHobbiesTile = (props = defaultProps) =>
    render(<LanguagesHobbiesTile {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('renders the main container with correct background and padding classes', () => {
    const {container} = renderLanguagesHobbiesTile();
    const mainDiv = container.firstChild as HTMLElement;

    expect(mainDiv).toHaveClass('bg-tertiary/20 rounded-4xl px-16 py-8 relative overflow-hidden');
  });

  test('renders the background wrapper with correct positioning and z-index', () => {
    const {container} = renderLanguagesHobbiesTile();
    const backgroundWrapper = container.querySelector('.-z-1');

    expect(backgroundWrapper).toBeInTheDocument();
    expect(backgroundWrapper).toHaveClass('absolute top-0 bottom-0 left-0 right-0');
  });

  test('renders both SpokenLanguages and Hobbies components', () => {
    renderLanguagesHobbiesTile();

    expect(screen.getByText('Spoken languages')).toBeInTheDocument();
    expect(screen.getByText('What drives me')).toBeInTheDocument();
  });

  test('applies correct layout classes for responsiveness', () => {
    const {container} = renderLanguagesHobbiesTile();
    const contentWrapper = container.querySelector('.flex.gap-4');

    expect(contentWrapper).toHaveClass('flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center');
  });
});
