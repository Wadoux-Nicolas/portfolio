import { useTranslations } from 'next-intl';
import AboutTemplate from '@/components/templates/about/about';
import Strong from '@/components/atoms/strong/strong';

export default function About() {
  const translate = useTranslations();
  const birthDate = new Date(2001, 4, 21);
  const startWorkingDate = new Date(2021, 3, 1);

  const getYearsDifference = (from: Date, to: Date) => {
    const diffInMs = to.getTime() - from.getTime();
    const diffDate = new Date(diffInMs);
    return Math.abs(diffDate.getUTCFullYear() - 1970);
  };

  return (
    <AboutTemplate
      sectionId={translate('Navigation.Slugs.about')}
      sectionAriaLabel={translate('Navigation.about')}
      title={translate('Navigation.about')}
      stats={{
        items: [
          {
            value: getYearsDifference(birthDate, new Date()),
            unit: translate('About.stats.age.unit'),
            label: translate('About.stats.age.label'),
          },
          {
            value: 18,
            unit: translate('About.stats.projects.unit'),
            label: translate('About.stats.projects.label'),
          },
          {
            value: getYearsDifference(startWorkingDate, new Date()),
            unit: translate('About.stats.experience.unit'),
            label: translate('About.stats.experience.label'),
          },
        ],
      }}
      presentations={[
        translate.rich('About.presentation.hello', {Strong: (children) => <Strong>{children}</Strong>}),
        translate.rich('About.presentation.why', {Strong: (children) => <Strong>{children}</Strong>}),
        translate.rich('About.presentation.team', {Strong: (children) => <Strong>{children}</Strong>}),
        translate.rich('About.presentation.location', {Strong: (children) => <Strong>{children}</Strong>}),
        translate.rich('About.presentation.contact', {Strong: (children) => <Strong>{children}</Strong>}),
      ]}
      languagesHobbies={{
        spokenLanguages: {
          sectionTitle: translate('About.spokenLanguages'),
          languages: [
            {
              flag: 'fr' as const,
              languageName: translate('Languages.french'),
              level: translate('About.frenchMotherTongue'),
            },
            {
              flag: 'gb' as const,
              languageName: translate('Languages.english'),
              level: translate('About.englishB2'),
              extraInfo: translate('About.englishToiec'),
            },
            {
              flag: 'es' as const,
              languageName: translate('Languages.spanish'),
              level: translate('About.spanishB1+'),
            },
          ],
        },
        hobbies: {
          sectionTitle: translate('About.whatDrivesMe'),
          hobbies: [
            {
              icon: 'palm-tree' as const,
              label: translate('About.visitingAndTraveling'),
            },
            {
              icon: 'violin' as const,
              label: translate('About.playViolin'),
            },
            {
              icon: 'cook' as const,
              label: translate('About.cookingAndBaking'),
            },
            {
              icon: 'badminton' as const,
              label: translate('About.doingSports'),
            },
          ],
        },
      }}
    />
  );
}
