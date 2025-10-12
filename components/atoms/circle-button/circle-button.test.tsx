import { afterEach, describe, expect, test } from 'vitest';
import CircleButton from '@/components/atoms/circle-button/circle-button';
import { cleanup, render, screen } from '@testing-library/react';

describe('CircleButton Atom', () => {
  const defaultRender = (props = {}) =>
    render(
      <CircleButton aria-label="Default Button" {...props}>
        Click Me
      </CircleButton>,
    );

  afterEach(() => {
    cleanup();
  });

  test('Renders as a button by default with correct text and accessibility label', () => {
    defaultRender();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('aria-label', 'Default Button');
    expect(button).toHaveTextContent('Click Me');
    expect(button).toHaveClass('cursor-pointer rounded-full');
  });

  test('Renders as an anchor tag (a) when "as" prop is set to "a"', () => {
    defaultRender({as: 'a', href: '/link'});

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/link');
    expect(link).toHaveTextContent('Click Me');
  });

  test('Renders as a div when "as" prop is set to "div"', () => {
    defaultRender({as: 'div'});

    // checks that it's not a button
    const div = screen.queryByRole('button');
    expect(div).not.toBeInTheDocument();

    const element = screen.getByText('Click Me');
    expect(element.tagName).toBe('DIV');
  });

  test('Applies "md" size classes by default', () => {
    defaultRender();
    const button = screen.getByRole('button');

    expect(button).toHaveClass('w-15');
    expect(button).toHaveClass('h-15');
  });

  test('Applies "sm" size classes when "size" prop is "sm"', () => {
    defaultRender({size: 'sm'});

    const button = screen.getByRole('button');

    expect(button).toHaveClass('w-10');
    expect(button).toHaveClass('h-10');
  });

  test('Applies background image style and specific transition classes when backgroundImage is present', () => {
    const imageUrl = '/path/to/icon.svg';
    defaultRender({backgroundImage: imageUrl});

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      'background-image': `url(${imageUrl})`,
      'background-size': 'contain',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
    });
  });
});