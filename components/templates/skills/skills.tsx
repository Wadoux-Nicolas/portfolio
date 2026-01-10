import Title from '@/components/atoms/title/title';
import { useTranslations } from 'next-intl';

export default function Skills() {
  const translate = useTranslations();

  return (
    <section
      id={translate('Navigation.Slugs.skills')}
      aria-label={translate('Navigation.skills')}
      className="min-h-dvh p-4 md:p-8 gap-8 md:gap-16 flex flex-col max-w-7xl mx-auto"
    >
      <Title
        as='h2'
      >
        {translate('Navigation.skills')}
      </Title>
    </section>
  );
}