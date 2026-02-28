import { useTranslations } from 'next-intl';
import Title from '@/components/atoms/title/title';
import LanguagesHobbiesTile from '@/components/organisms/languages-hobbies-tile/languages-hobbies-tile';
import AboutItems from '@/components/organisms/about-items/about-items';
import Strong from '@/components/atoms/strong/strong';

export default function About() {
  const translate = useTranslations();

  return (
    <section
      id={translate('Navigation.Slugs.about')}
      aria-label={translate('Navigation.about')}
      className="min-h-dvh p-4 md:p-8 gap-8 md:gap-16 flex flex-col max-w-7xl mx-auto"
    >
      <Title
        as='h2'
      >
        {translate('Navigation.about')}
      </Title>

      <AboutItems/>

      <div className="flex flex-col gap-1 text-md md:text-lg">
        <p>
          {translate.rich('About.presentation.hello', {Strong: (children) => <Strong>{children}</Strong>})}
        </p>
        <p>
          {translate.rich('About.presentation.why', {Strong: (children) => <Strong>{children}</Strong>})}
        </p>
        <p>
          {translate.rich('About.presentation.team', {Strong: (children) => <Strong>{children}</Strong>})}
        </p>
        <p>
          {translate.rich('About.presentation.location', {Strong: (children) => <Strong>{children}</Strong>})}
        </p>
        <p>
          {translate.rich('About.presentation.contact', {Strong: (children) => <Strong>{children}</Strong>})}
        </p>

      </div>

      <LanguagesHobbiesTile/>
    </section>
  );
}