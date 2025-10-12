import FilledButton from '@/components/atoms/filled-button/filled-button';
import CircleButton from '@/components/atoms/circle-button/circle-button';
import { useTranslations } from 'next-intl';

export default function ContactMeAndSocials() {
  const translate = useTranslations('Actions');

  const flexContainerCommonClass = 'flex flex-row 4xl:flex-col flex-wrap items-center justify-center gap-4';

  return (
    <div className={flexContainerCommonClass}>
      <FilledButton rounded className="max-xs:w-full">{translate('contactMe')}</FilledButton>

      <div className={flexContainerCommonClass}>
        <CircleButton aria-label='Curriculum vitae'>{translate('downloadCv')}</CircleButton>
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