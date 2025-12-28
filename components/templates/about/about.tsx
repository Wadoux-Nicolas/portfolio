import { useTranslations } from 'next-intl';
import Title from '@/components/atoms/title/title';

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
    </section>
  );
}