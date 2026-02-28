import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import LanguagesHobbiesBlobsBackground from './languages-hobbies-blobs-background';

describe('LanguagesHobbiesBlobsBackground Organism', () => {
  const defaultRender = () => render(<LanguagesHobbiesBlobsBackground/>);

  afterEach(() => {
    cleanup();
  });

  test('renders exactly three background blob images', () => {
    defaultRender();
    const images = screen.getAllByRole('presentation', {hidden: true});
    expect(images).toHaveLength(3);
  });
});