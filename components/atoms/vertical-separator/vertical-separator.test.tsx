import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import VerticalSeparator from './vertical-separator';

describe('VerticalSeparator Atom', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly with correct accessibility roles', () => {
    render(<VerticalSeparator/>);

    const separator = screen.getByRole('separator');

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('aria-orientation', 'vertical');
  });

  test('applies the correct layout and color classes', () => {
    render(<VerticalSeparator/>);

    const separator = screen.getByRole('separator');

    expect(separator).toHaveClass('w-1');
    expect(separator).toHaveClass('bg-tertiary');
    expect(separator).toHaveClass('rounded-full');
    expect(separator).toHaveClass('h-10');
  });
});