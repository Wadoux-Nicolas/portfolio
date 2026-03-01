import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Hobbies from './hobbies';

describe('Hobbies Component', () => {
  const defaultProps = {
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
  };

  const renderHobbies = (props = defaultProps) =>
    render(<Hobbies {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('renders the section title correctly', () => {
    renderHobbies();

    const title = screen.getByText('What drives me');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-secondary text-center');
  });

  test('renders the correct number of hobby items', () => {
    renderHobbies();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  test('renders all specific hobby texts', () => {
    renderHobbies();

    expect(screen.getByText('Visiting and traveling')).toBeInTheDocument();
    expect(screen.getByText('Play violin')).toBeInTheDocument();
    expect(screen.getByText('Cooking and baking')).toBeInTheDocument();
    expect(screen.getByText('Doing sports')).toBeInTheDocument();
  });

  test('applies responsive flex classes to the list container', () => {
    renderHobbies();

    const list = screen.getByRole('list');
    expect(list).toHaveClass('flex gap-x-8 gap-y-4 flex-wrap sm:flex-nowrap justify-center');
  });
});
