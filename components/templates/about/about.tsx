import { useTranslations } from 'next-intl';
import Title from '@/components/atoms/title/title';
import LanguagesHobbiesTile from '@/components/organisms/languages-hobbies-tile/languages-hobbies-tile';

export default function About() {
  const translate = useTranslations();

  return (
    <section
      id={translate('Navigation.Slugs.about')}
      aria-label={translate('Navigation.about')}
      className="h-dvh p-8"
    >
      <Title
        as='h2'
      >
        {translate('Navigation.about')}
      </Title>

      <LanguagesHobbiesTile/>
    </section>
  );
}