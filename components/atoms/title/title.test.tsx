import { afterEach, describe, expect, test } from 'vitest';
import Title from '@/components/atoms/title/title';
import { cleanup, render, screen } from '@testing-library/react';
import { ComponentPropsWithoutRef } from 'react';

describe('Title Atom', () => {
  const titleText = 'My title';

  const renderTitle = (
    props: ComponentPropsWithoutRef<typeof Title> = {},
    children = titleText,
  ) =>
    render(
      <Title {...props}>
        {children}
      </Title>,
    );

  afterEach(() => {
    cleanup();
  });

  test('Renders as H1 by default and contains the correct text', () => {
    renderTitle();

    const heading = screen.getByRole('heading', {level: 1, name: titleText});
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });

  test('Renders the decorative background div inside the heading tag', () => {
    renderTitle();

    const backgroundDiv = document.querySelector('h1 > div.bg-tertiary');

    expect(backgroundDiv).toBeInTheDocument();
    expect(backgroundDiv).toHaveClass('absolute', 'top-0', 'left-0', 'right-1/2', 'bottom-1/2', 'opacity-20');
  });

  test('Renders as an H2 heading when "as" prop is set to "h2"', () => {
    renderTitle({as: 'h2'});

    const heading = screen.getByRole('heading', {level: 2, name: titleText});

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });

  test('Applies correct size classes for H1 by default', () => {
    renderTitle();
    const heading = screen.getByRole('heading', {level: 1});

    expect(heading).toHaveClass('sm:text-6xl', 'text-5xl');
  });

  test('Applies correct size classes for H2', () => {
    renderTitle({as: 'h2'});
    const heading = screen.getByRole('heading', {level: 2});

    expect(heading).toHaveClass('sm:text-5xl', 'text-4xl');

    // check there's no h1 class
    expect(heading).not.toHaveClass('sm:text-6xl', 'text-5xl');
  });
});