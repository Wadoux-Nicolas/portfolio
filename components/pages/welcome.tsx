import type { Locale } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Welcome as WelcomeTemplate } from '@/components/templates/welcome/welcome';

export default function Welcome({
  locale,
}: {
  locale: Locale;
}) {
  const translate = useTranslations();

  const getCvFileUrl = (locale: string) => {
    const path = '/cv/';
    switch (locale) {
      case 'fr':
        return `${path}CV - Nicolas Wadoux - FR.pdf`;
      case 'es':
        return `${path}CV - Nicolas Wadoux - ES.pdf`;
      case 'en':
        return `${path}CV - Nicolas Wadoux - EN.pdf`;
      default:
        return `${path}CV - Nicolas Wadoux - EN.pdf`;
    }
  };

  return (
    <WelcomeTemplate
      sectionAriaLabel={translate('Navigation.home')}
      greeting={translate('Welcome.greeting')}
      name="Nicolas Wadoux"
      jobTitle={
        translate.rich(
          'Welcome.job',
          {
            web: (chunks) => <span className="text-secondary md:text-5xl sm:text-4xl text-3xl">{chunks}</span>,
            and: (chunks) => <span>{chunks}</span>,
            mobile: (chunks) => <span
              className="text-secondary md:text-5xl sm:text-4xl text-3xl">{chunks}</span>,
            developer: (chunks) => <span>{chunks}</span>,
          },
        )
      }
      contactMeAndSocials={{
        contactMeLabel: translate('Actions.contactMe'),
        downloadCvLabel: translate('Actions.downloadCv'),
        cvFileUrl: getCvFileUrl(locale),
        cvFileLang: locale,
        githubUrl: 'https://github.com/Wadoux-Nicolas?tab=repositories',
        linkedinUrl: 'https://www.linkedin.com/in/nicolas-wadoux-5b8271193',
        contactMeAriaLabel: translate('Actions.contactMe'),
        cvAriaLabel: translate('Actions.curriculumVitae'),
        githubAriaLabel: translate('Actions.seeGithub'),
        linkedinAriaLabel: translate('Actions.seeLinkedin'),
      }}
    />
  );
}