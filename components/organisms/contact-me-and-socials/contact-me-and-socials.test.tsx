import { describe, expect, test, afterEach } from 'vitest';
import ContactMeAndSocials from '@/components/organisms/contact-me-and-socials/contact-me-and-socials';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

const defaultProps = {
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
};

const renderContactMeAndSocials = (props = defaultProps) =>
  render(<ContactMeAndSocials {...props} />);

describe('ContactMeAndSocials Organism', () => {
  test('Renders correctly and displays the contact button', () => {
    renderContactMeAndSocials();
    const filledButton = screen.getByText(defaultProps.contactMeLabel);
    expect(filledButton).toBeInTheDocument();
    expect(filledButton.tagName).toBe('BUTTON');
  });

  test('Renders CV button correctly', () => {
    renderContactMeAndSocials();
    const cvButton = screen.getByText(defaultProps.downloadCvLabel);
    expect(cvButton).toBeInTheDocument();
    expect(cvButton).toHaveAttribute('aria-label', defaultProps.cvAriaLabel);
  });

  test('Renders Github button correctly', () => {
    renderContactMeAndSocials();
    const githubButton = screen.getByLabelText(defaultProps.githubAriaLabel);
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute('href', defaultProps.githubUrl);
    expect(githubButton).toHaveAttribute('target', '_blank');
  });

  test('Renders LinkedIn button correctly', () => {
    renderContactMeAndSocials();
    const linkedinButton = screen.getByLabelText(defaultProps.linkedinAriaLabel);
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute('href', defaultProps.linkedinUrl);
    expect(linkedinButton).toHaveAttribute('target', '_blank');
  });
});