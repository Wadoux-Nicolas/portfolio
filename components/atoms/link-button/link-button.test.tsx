import { afterEach, describe, expect, test } from 'vitest';
import LinkButton from '@/components/atoms/link-button/link-button';
import { cleanup, render, screen } from '@testing-library/react';

describe('LinkButton Atom', () => {
  const renderLinkButton = (props = {}) =>
    render(
      <LinkButton href="/destination" {...props}>
        Click Me
      </LinkButton>,
    );

  afterEach(() => {
    cleanup();
  });

  test('Renders as a link with the correct href and text content', () => {
    renderLinkButton();

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/destination');
    expect(link).toHaveTextContent('Click Me');
    expect(link).toHaveClass('cursor-pointer');
  });

  test('Renders the ChevronRightIcon', () => {
    renderLinkButton();

    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  test('Applies "primary" color classes by default', () => {
    renderLinkButton();

    const link = screen.getByRole('link');

    expect(link).toHaveClass('text-primary');
    expect(link).toHaveClass('hover:text-primary-600');

    expect(link).not.toHaveClass('text-secondary');
  });

  test('Applies "secondary" color classes when color is set to "secondary"', () => {
    renderLinkButton({color: 'secondary'});

    const link = screen.getByRole('link');

    expect(link).toHaveClass('text-secondary');
    expect(link).toHaveClass('hover:text-secondary-600');

    expect(link).not.toHaveClass('text-primary');
  });

  test('Applies "tertiary" color classes when color is set to "tertiary"', () => {
    renderLinkButton({color: 'tertiary'});

    const link = screen.getByRole('link');

    expect(link).toHaveClass('text-tertiary');
    expect(link).toHaveClass('hover:text-tertiary-600');

    expect(link).not.toHaveClass('text-primary');
  });
});