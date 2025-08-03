import FilledButton from '@/components/atoms/filled-button';
import CircleButton from '@/components/atoms/circle-button';

export default function ContactMeAndSocials() {
  return (
    <div className="flex flex-col items-center gap-4">
      <FilledButton rounded>Me contacter</FilledButton>
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
  );
}