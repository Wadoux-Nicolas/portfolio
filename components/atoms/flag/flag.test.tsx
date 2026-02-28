import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Flag from './flag';

describe('Flag Atom', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders the correct image source based on the flag prop', () => {
    const {rerender} = render(<Flag flag='fr' alt='français'/>);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('fr.svg'));
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'français');

    rerender(<Flag flag="es" alt='español'/>);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('es.svg'));
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'español');

    rerender(<Flag flag="gb" alt='english'/>);
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('gb.svg'));
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'english');
  });

  test('renders with default width and height', () => {
    render(<Flag flag='fr' alt='français'/>);
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('width', '80');
    expect(img).toHaveAttribute('height', '55');
  });

  test('renders with custom width and height', () => {
    render(<Flag flag='fr' alt='français' width={150} height={100}/>);
    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('width', '150');
    expect(img).toHaveAttribute('height', '100');
  });

  test('forwards additional props like className', () => {
    render(<Flag flag='fr' alt='français' className='custom-flag-class'/>);
    expect(screen.getByRole('img')).toHaveClass('custom-flag-class');
  });
});