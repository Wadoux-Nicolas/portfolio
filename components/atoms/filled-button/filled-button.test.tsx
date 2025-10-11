import { afterEach, describe, expect, test } from 'vitest';
import FilledButton from '@/components/atoms/filled-button/filled-button';
import { cleanup, render, screen } from '@testing-library/react';

describe('FilledButton Atom', () => {
  const renderFilledButton = (props = {}) =>
    render(
      <FilledButton {...props} aria-label="Filled Button">
        Click Me
      </FilledButton>,
    );

  afterEach(() => {
    cleanup();
  });

  test('Renders a button with default type, text content, and accessibility role', () => {
    renderFilledButton();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('aria-label', 'Filled Button');
    expect(button).toHaveTextContent('Click Me');
    expect(button).toHaveClass('cursor-pointer');
  });

  test('Sets button type correctly when explicitely provided', () => {
    renderFilledButton({type: 'submit'});

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('Applies "primary" color classes by default', () => {
    renderFilledButton();

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('hover:bg-primary-600');

    expect(button).not.toHaveClass('bg-secondary');
    expect(button).not.toHaveClass('bg-tertiary');
  });

  test('Applies "secondary" color classes when color is set to "secondary"', () => {
    renderFilledButton({color: 'secondary'});

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveClass('hover:bg-secondary-600');

    expect(button).not.toHaveClass('bg-primary');
  });

  test('Applies "tertiary" color classes when color is set to "tertiary"', () => {
    renderFilledButton({color: 'tertiary'});

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-tertiary');
    expect(button).toHaveClass('hover:bg-tertiary-600');

    expect(button).not.toHaveClass('bg-primary');
  });

  test('Applies squared "rounded" class by default', () => {
    renderFilledButton();

    const button = screen.getByRole('button');

    expect(button).toHaveClass('rounded');
    expect(button).not.toHaveClass('rounded-full');
  });

  test('Applies "rounded-full" class when rounded prop is true', () => {
    renderFilledButton({rounded: true});

    const button = screen.getByRole('button');

    expect(button).toHaveClass('rounded-full');
    expect(button).not.toHaveClass('rounded');
  });
});