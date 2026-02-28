import FilledButton from '@/components/atoms/filled-button/filled-button';
import CircleButton from '@/components/atoms/circle-button/circle-button';

export interface ContactMeAndSocialsProps {
  contactMeLabel: string;
  downloadCvLabel: string;
  cvFileUrl: string;
  cvFileLang: string;
  githubUrl: string;
  linkedinUrl: string;
  contactMeAriaLabel: string;
  cvAriaLabel: string;
  githubAriaLabel: string;
  linkedinAriaLabel: string;
}

export default function ContactMeAndSocials({
  contactMeLabel,
  downloadCvLabel,
  cvFileUrl,
  cvFileLang,
  githubUrl,
  linkedinUrl,
  contactMeAriaLabel,
  cvAriaLabel,
  githubAriaLabel,
  linkedinAriaLabel,
}: ContactMeAndSocialsProps) {
  const flexContainerCommonClass = 'flex flex-row 4xl:flex-col flex-wrap items-center justify-center gap-4';

  return (
    <div className={flexContainerCommonClass}>
      <FilledButton rounded className="max-xs:w-full" aria-label={contactMeAriaLabel}>{contactMeLabel}</FilledButton>

      <div className={flexContainerCommonClass}>
        <CircleButton
          as='a'
          aria-label={cvAriaLabel}
          href={cvFileUrl}
          hrefLang={cvFileLang}
          target='_blank'
          rel='noopener'
        >{downloadCvLabel}</CircleButton>
        <CircleButton
          as='a'
          href={githubUrl}
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/github.svg'
          aria-label={githubAriaLabel}
        />
        <CircleButton
          as='a'
          href={linkedinUrl}
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/linkedin.svg'
          aria-label={linkedinAriaLabel}
        />
      </div>
    </div>
  );
}