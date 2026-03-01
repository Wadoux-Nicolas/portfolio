import LanguagesHobbiesBlobsBackground
  from '@/components/organisms/languages-hobbies-tile/languages-hobbies-blobs-background';
import SpokenLanguages from '@/components/organisms/spoken-languages/spoken-languages';
import type { SpokenLanguagesProps } from '@/components/organisms/spoken-languages/spoken-languages';
import Hobbies from '@/components/organisms/hobbies/hobbies';
import type { HobbiesProps } from '@/components/organisms/hobbies/hobbies';

export interface LanguagesHobbiesTileProps {
  spokenLanguages: SpokenLanguagesProps;
  hobbies: HobbiesProps;
}

export default function LanguagesHobbiesTile({
  spokenLanguages,
  hobbies,
}: LanguagesHobbiesTileProps) {
  return (
    <div className='bg-tertiary/20 rounded-4xl px-16 py-8 relative overflow-hidden'>
      <div className="-z-1 absolute top-0 bottom-0 left-0 right-0">
        <LanguagesHobbiesBlobsBackground/>
      </div>
      <div
        className='flex gap-4 flex-wrap lg:flex-nowrap lg:justify-between justify-center items-center'>
        <SpokenLanguages {...spokenLanguages}/>
        <Hobbies {...hobbies}/>
      </div>
    </div>
  );
}