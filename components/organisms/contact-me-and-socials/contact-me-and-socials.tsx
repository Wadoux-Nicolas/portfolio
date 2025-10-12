import FilledButton from '@/components/atoms/filled-button/filled-button';
import CircleButton from '@/components/atoms/circle-button/circle-button';
import { useLocale, useTranslations } from 'next-intl';

export default function ContactMeAndSocials() {
  const translate = useTranslations('Actions');
  const locale = useLocale();

  const getFileByLocale = (locale: string) => {
    const $path = '/cv/';
    switch (locale) {
      case 'fr':
        return `${$path}CV - Nicolas Wadoux - FR.pdf`;
      case 'es':
        return `${$path}CV - Nicolas Wadoux - ES.pdf`;
      case 'en':
      default:
        return `${$path}CV - Nicolas Wadoux - EN.pdf`;
    }
  };

  // get cv file by locale
  const cvFile = getFileByLocale(locale);

  const flexContainerCommonClass = 'flex flex-row 4xl:flex-col flex-wrap items-center justify-center gap-4';

  return (
    <div className={flexContainerCommonClass}>
      <FilledButton rounded className="max-xs:w-full">{translate('contactMe')}</FilledButton>

      <div className={flexContainerCommonClass}>
        <CircleButton
          as='a'
          aria-label={translate('curriculumVitae')}
          href={cvFile}
          hrefLang={locale}
          target='_blank'
          rel='noopener'
        >{translate('downloadCv')}</CircleButton>
        <CircleButton
          as='a'
          href='https://github.com/Wadoux-Nicolas?tab=repositories'
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/github.svg'
          aria-label={translate('seeGithub')}
        />
        <CircleButton
          as='a'
          href='https://www.linkedin.com/in/nicolas-wadoux-5b8271193'
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/linkedin.svg'
          aria-label={translate('seeLinkedin')}
        />
      </div>
    </div>
  );
}