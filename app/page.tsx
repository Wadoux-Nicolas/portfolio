import FilledButton from '@/components/atoms/filled-button';
import CircleButton from '@/components/atoms/circle-button';

export default function Home() {
  return (
    <div>
      <FilledButton>Me contacter</FilledButton>
      <CircleButton>CV</CircleButton>
      <CircleButton backgroundImage={'/logos/github.svg'}/>
      <CircleButton backgroundImage={'/logos/figma.svg'}/>
      <CircleButton backgroundImage={'/logos/linkedin.svg'}/>
    </div>
  );
}