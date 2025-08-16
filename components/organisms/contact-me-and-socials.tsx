import FilledButton from '@/components/atoms/filled-button';
import CircleButton from '@/components/atoms/circle-button';

export default function ContactMeAndSocials() {
  const flexContainerCommonClass = 'flex flex-row 4xl:flex-col flex-wrap items-center justify-center gap-4';

  return (
    <div className={flexContainerCommonClass}>
      <FilledButton rounded className="max-xs:w-full">Me contacter</FilledButton>

      <div className={flexContainerCommonClass}>
        <CircleButton aria-label='Curriculum vitae'>CV</CircleButton>
        <CircleButton
          as='a'
          href='https://github.com/Wadoux-Nicolas?tab=repositories'
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/github.svg'
          aria-label='Mon GitHub'
        />
        <CircleButton
          as='a'
          href='https://www.linkedin.com/in/nicolas-wadoux-5b8271193'
          target='_blank'
          rel='noopener'
          backgroundImage='/logos/linkedin.svg'
          aria-label='Mon LinkedIn'
        />
      </div>
    </div>
  );
}