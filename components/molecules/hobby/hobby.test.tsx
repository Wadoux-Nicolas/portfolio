import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Hobby from './hobby';

describe('Hobby Component', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders a figure and a figcaption', () => {
    render(
      <Hobby icon="palm-tree">
        Traveling
      </Hobby>,
    );

    expect(screen.getByRole('figure')).toBeInTheDocument();
    expect(screen.getByText('Traveling')).toBeInTheDocument();
    expect(screen.getByText('Traveling').tagName).toBe('FIGCAPTION');
  });

  test('renders the correct icon source based on the icon prop', () => {
    const {rerender} = render(
      <Hobby icon="violin">
        Traveling
      </Hobby>,
    );
    expect(screen.getByRole('presentation')).toHaveAttribute('src', expect.stringContaining('violin.svg'));

    rerender(<Hobby icon="cook">Cooking</Hobby>);
    expect(screen.getByRole('presentation')).toHaveAttribute('src', expect.stringContaining('cook.svg'));

    rerender(<Hobby icon="badminton">Badminton</Hobby>);
    expect(screen.getByRole('presentation')).toHaveAttribute('src', expect.stringContaining('badminton.svg'));

    rerender(<Hobby icon="palm-tree">Traveling</Hobby>);
    expect(screen.getByRole('presentation')).toHaveAttribute('src', expect.stringContaining('palm-tree.svg'));
  });

  test('renders the icon image with an empty alt attribute', () => {
    render(
      <Hobby icon="palm-tree">
        Traveling
      </Hobby>,
    );

    expect(screen.getByRole('presentation')).toHaveAttribute('alt', '');
  });

  test('applies correct layout classes to the figure and its container', () => {
    render(
      <Hobby icon="palm-tree">
        Traveling
      </Hobby>,
    );


    const figure = screen.getByRole('figure');
    const circleContainer = figure.querySelector('div');

    expect(figure).toHaveClass('w-18 md:w-24 text-center gap-2 flex flex-col');
    expect(circleContainer).toHaveClass('rounded-full bg-secondary text-white w-14 h-14 md:w-20 md:h-20');
  });

  test('applies specific sizing classes to the image', () => {
    render(
      <Hobby icon="palm-tree">
        Traveling
      </Hobby>,
    );

    const img = screen.getByRole('presentation');

    expect(img).toHaveClass('w-8 h-8 md:w-11 md:h-11');
    expect(img).toHaveAttribute('width', '44');
    expect(img).toHaveAttribute('height', '44');
  });
});