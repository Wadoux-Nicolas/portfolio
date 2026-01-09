import SpokenLanguageFlag from '@/components/molecules/spoken-language-flag/spoken-language-flag';
import { useTranslations } from 'next-intl';

export default function SpokenLanguages() {
  const translate = useTranslations();

  return (
    <section className="w-fit">
      <h3 className='text-center mb-2 text-secondary'>
        {translate('About.spokenLanguages')}
      </h3>
      <ul className='flex flex-wrap sm:flex-nowrap justify-center gap-8 md:gap-16'>
        <li>
          <SpokenLanguageFlag alt={translate('Languages.french')} flag={'fr'}>
            {translate('About.frenchMotherTongue')}
          </SpokenLanguageFlag>
        </li>
        <li>
          <SpokenLanguageFlag alt={translate('Languages.english')} flag={'gb'}>
            <span>{translate('About.englishB2')}</span>
            <br/>
            <span>{translate('About.englishToiec')}</span>
          </SpokenLanguageFlag>
        </li>
        <li>
          <SpokenLanguageFlag alt={translate('Languages.spanish')} flag={'es'}>
            {translate('About.spanishB1+')}
          </SpokenLanguageFlag>
        </li>
      </ul>
    </section>
  );
}