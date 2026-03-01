import Title from '@/components/atoms/title/title';
import LanguagesHobbiesTile from '@/components/organisms/languages-hobbies-tile/languages-hobbies-tile';
import type { AboutItemsProps } from '@/components/organisms/about-items/about-items';
import AboutItems from '@/components/organisms/about-items/about-items';
import type { SpokenLanguagesProps } from '@/components/organisms/spoken-languages/spoken-languages';
import type { HobbiesProps } from '@/components/organisms/hobbies/hobbies';
import { ReactNode } from 'react';

export interface AboutProps {
  sectionId: string;
  sectionAriaLabel: string;
  title: string;
  stats: AboutItemsProps;
  presentations: ReactNode[];
  languagesHobbies: {
    spokenLanguages: SpokenLanguagesProps;
    hobbies: HobbiesProps;
  };
}

export default function About({
  sectionId,
  sectionAriaLabel,
  title,
  stats,
  presentations,
  languagesHobbies,
}: AboutProps) {
  return (
    <section
      id={sectionId}
      aria-label={sectionAriaLabel}
      className="min-h-dvh p-4 md:p-8 gap-8 md:gap-16 flex flex-col max-w-7xl mx-auto"
    >
      <Title as='h2'>
        {title}
      </Title>

      <AboutItems {...stats} />

      <div className="flex flex-col gap-1 text-md md:text-lg">
        {presentations.map((presentation, index) => <p key={index}>{presentation}</p>)}
      </div>

      <LanguagesHobbiesTile
        spokenLanguages={languagesHobbies.spokenLanguages}
        hobbies={languagesHobbies.hobbies}
      />
    </section>
  );
}