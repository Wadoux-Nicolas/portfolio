import FilledButton from '@/components/ui/filled-button';
import CircleButton from '@/components/ui/circle-button';

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