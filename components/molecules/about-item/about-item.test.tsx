import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import AboutItem, { AboutItemProps } from './about-item';

describe('AboutItem Molecule', () => {
  const defaultProps: AboutItemProps = {
    value: 5,
    unit: 'years',
    label: 'Experiences',
  };

  afterEach(() => {
    cleanup();
  });

  test('renders the value, unit and description correctly', () => {
    render(<AboutItem {...defaultProps} />);

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('years')).toBeInTheDocument();
    expect(screen.getByText('Experiences')).toBeInTheDocument();
  });

  test('applies correct color classes to value and unit', () => {
    render(<AboutItem {...defaultProps} />);

    const valueElement = screen.getByText('5');
    const unitElement = screen.getByText('years');

    expect(valueElement).toHaveClass('text-secondary');
    expect(unitElement).toHaveClass('text-primary');
  });

  test('merges custom className using clsx', () => {
    render(<AboutItem {...defaultProps} className="custom-margin"/>);

    const container = screen.getByText('Experiences').closest('strong');

    expect(container).toHaveClass('text-tertiary');
    expect(container).toHaveClass('custom-margin');
  });

  test('spreads standard HTML attributes', () => {
    render(<AboutItem {...defaultProps} data-testid="about-item" id="unique-id"/>);

    const container = screen.getByTestId('about-item');
    expect(container).toHaveAttribute('id', 'unique-id');
  });
});