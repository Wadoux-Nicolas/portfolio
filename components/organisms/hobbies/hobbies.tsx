import type { HobbyIcon } from '@/components/molecules/hobby/hobby';
import Hobby from '@/components/molecules/hobby/hobby';

export interface HobbyItem {
  icon: HobbyIcon;
  label: string;
}

export interface HobbiesProps {
  sectionTitle: string;
  hobbies: HobbyItem[];
}

export default function Hobbies({
  sectionTitle,
  hobbies,
}: HobbiesProps) {
  return (
    <section className="w-fit">
      <h3 className='text-center mb-2 text-secondary'>
        {sectionTitle}
      </h3>
      <ul className='flex gap-x-8 gap-y-4 flex-wrap sm:flex-nowrap justify-center'>
        {hobbies.map((hobby) => (
          <li key={hobby.label}>
            <Hobby icon={hobby.icon}>
              {hobby.label}
            </Hobby>
          </li>
        ))}
      </ul>
    </section>
  );
}