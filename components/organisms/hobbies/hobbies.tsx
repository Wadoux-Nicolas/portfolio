import { useTranslations } from 'next-intl';
import Hobby from '@/components/molecules/hobby/hobby';

export default function Hobbies() {
  const translate = useTranslations();

  return (
    <section className="w-fit">
      <h3 className='text-center mb-2 text-secondary'>
        {translate('About.whatDrivesMe')}
      </h3>
      <ul className='flex gap-x-8 gap-y-4 flex-wrap sm:flex-nowrap justify-center'>
        <li>
          <Hobby
            icon={'palm-tree'}
          >
            {translate('About.visitingAndTraveling')}
          </Hobby>
        </li>
        <li>
          <Hobby
            icon={'violin'}
          >
            {translate('About.playViolin')}
          </Hobby>
        </li>
        <li>
          <Hobby
            icon={'cook'}
          >
            {translate('About.cookingAndBaking')}
          </Hobby>
        </li>
        <li>
          <Hobby
            icon={'badminton'}
          >
            {translate('About.doingSports')}
          </Hobby>
        </li>
      </ul>
    </section>
  );
}