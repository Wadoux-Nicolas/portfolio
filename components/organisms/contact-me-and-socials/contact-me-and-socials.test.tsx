import { beforeAll, describe, expect, test } from 'vitest';
import { NextIntlClientProvider } from 'next-intl';
import ContactMeAndSocials from '@/components/organisms/contact-me-and-socials/contact-me-and-socials';
import { render, screen } from '@testing-library/react';
import frMessages from '@/messages/fr.json';

const renderContactMeAndSocials = () =>
  render(
    <NextIntlClientProvider locale={'fr'} messages={frMessages}>
      <ContactMeAndSocials/>
    </NextIntlClientProvider>,
  );

describe('ContactMeAndSocials Organism', () => {
  beforeAll(() => {
    renderContactMeAndSocials();
  });

  test('Renders correctly and displays the contact button with translation', () => {
    const filledButton = screen.getByText(frMessages.Actions.contactMe);
    expect(filledButton).toBeInTheDocument();
    expect(filledButton.tagName).toBe('BUTTON');
  });

  test('Renders CV button correctly', () => {
    const cvButton = screen.getByText(frMessages.Actions.downloadCv);
    expect(cvButton).toBeInTheDocument();
    expect(cvButton).toHaveAttribute('aria-label', 'Curriculum vitae');
  });

  test('Renders Github button correctly', () => {
    const githubButton = screen.getByLabelText(frMessages.Actions.seeGithub);
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute('href', 'https://github.com/Wadoux-Nicolas?tab=repositories');
    expect(githubButton).toHaveAttribute('target', '_blank');
  });

  test('Renders LinkedIn button correctly', () => {
    const linkedinButton = screen.getByLabelText(frMessages.Actions.seeLinkedin);
    expect(linkedinButton).toBeInTheDocument();
    expect(linkedinButton).toHaveAttribute('href', 'https://www.linkedin.com/in/nicolas-wadoux-5b8271193');
    expect(linkedinButton).toHaveAttribute('target', '_blank');
  });
});