import { useTranslations } from 'next-intl';

export default function About() {
  const translate = useTranslations();

  return (
    <section aria-label={translate('Navigation.about')}
             className="h-dvh flex items-center justify-center">
    </section>
  );
}