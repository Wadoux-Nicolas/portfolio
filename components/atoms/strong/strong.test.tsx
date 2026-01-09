import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Strong from './strong';

describe('Strong Atom', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the content correctly', () => {
    render(
      <Strong>Important text</Strong>,
    );

    const element = screen.getByText('Important text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('STRONG');
    expect(element.className).toContain('text-secondary');
  });

  test('merges default class with a custom className', () => {
    render(
      <Strong className='my-custom-class'>Important text</Strong>,
    );

    const element = screen.getByText('Important text');
    expect(element.className).toContain('text-secondary');
    expect(element.className).toContain('my-custom-class');
  });

  test('spreads standard HTML attributes', () => {
    render(
      <Strong id="unique-id" data-testid="strong-element" aria-hidden="true">
        Text
      </Strong>,
    );

    const element = screen.getByTestId('strong-element');
    expect(element).toHaveAttribute('id', 'unique-id');
    expect(element).toHaveAttribute('aria-hidden', 'true');
  });
});