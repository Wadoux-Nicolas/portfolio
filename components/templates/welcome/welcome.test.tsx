import { afterEach, describe, expect, test, vi } from 'vitest';
import { Welcome } from '@/components/templates/welcome/welcome';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

vi.mock('@/components/organisms/contact-me-and-socials/contact-me-and-socials', () => ({
  default: () => <div data-testid="mock-contact-me-and-socials"/>,
}));
vi.mock('@/components/organisms/welcome-blobs-background/welcome-blobs-background', () => ({
  default: () => <div data-testid="mock-welcome-blobs-background"/>,
}));
vi.mock('@/components/atoms/scroll-indicator/scroll-indicator', () => ({
  default: () => <div data-testid="mock-scroll-indicator"/>,
}));

const defaultProps = {
  sectionAriaLabel: 'Home',
  greeting: 'Hello ! I am',
  name: 'Nicolas Wadoux',
  jobTitle: 'Fullstack Web Developer',
  contactMeAndSocials: {
    contactMeLabel: 'Contact me',
    downloadCvLabel: 'CV',
    cvFileUrl: '/cv/CV - Nicolas Wadoux - FR.pdf',
    cvFileLang: 'fr',
    githubUrl: 'https://github.com/Wadoux-Nicolas?tab=repositories',
    linkedinUrl: 'https://www.linkedin.com/in/nicolas-wadoux-5b8271193',
    contactMeAriaLabel: 'Contact me',
    cvAriaLabel: 'Curriculum vitae',
    githubAriaLabel: 'My Github',
    linkedinAriaLabel: 'My Linkedin',
  },
};

const renderWelcome = (props = defaultProps) =>
  render(<Welcome {...props} />);

describe('Welcome Template', () => {
  test('Renders correctly and checks the main section attributes', () => {
    renderWelcome();
    const section = screen.getByRole('region', {name: defaultProps.sectionAriaLabel});
    expect(section).toBeInTheDocument();
    expect(section.ariaLabel).toBe(defaultProps.sectionAriaLabel);
  });

  test('Renders all child components', () => {
    renderWelcome();
    expect(screen.getByTestId('mock-welcome-blobs-background')).toBeInTheDocument();
    expect(screen.getByTestId('mock-contact-me-and-socials')).toBeInTheDocument();
    expect(screen.getByTestId('mock-scroll-indicator')).toBeInTheDocument();
  });

  test('Displays structured text for the job title', () => {
    renderWelcome();
    expect(screen.getByText(defaultProps.greeting)).toBeInTheDocument();

    const h1Element = screen.getByRole('heading', {level: 1});
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('Nicolas Wadoux, Fullstack Web Developer');
  });
});