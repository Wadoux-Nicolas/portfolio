import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import AboutItems, { AboutItemsProps } from './about-items';

describe('AboutItems Organism', () => {
  const defaultProps: AboutItemsProps = {
    items: [
      {
        value: 24,
        unit: 'ans',
        label: 'Sur terre',
      },
      {
        value: 18,
        unit: 'projets',
        label: 'réalisés avec passion',
      },
      {
        value: 4,
        unit: 'années',
        label: "d'expériences professionnelles",
      },
    ],
  };

  const renderAboutItems = (props = defaultProps) =>
    render(<AboutItems {...props} />);

  afterEach(() => {
    cleanup();
  });

  test('renders all items with correct values and translated labels', () => {
    renderAboutItems();

    expect(screen.getByText('24')).toBeInTheDocument();
    expect(screen.getByText('Sur terre')).toBeInTheDocument();
    expect(screen.getByText('ans')).toBeInTheDocument();

    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByText('réalisés avec passion')).toBeInTheDocument();
    expect(screen.getByText('projets')).toBeInTheDocument();

    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText("d'expériences professionnelles")).toBeInTheDocument();
    expect(screen.getByText('années')).toBeInTheDocument();
  });

  test('renders vertical separators between items', () => {
    renderAboutItems();

    const separators = screen.getAllByRole('separator');
    expect(separators).toHaveLength(2);
  });
});
