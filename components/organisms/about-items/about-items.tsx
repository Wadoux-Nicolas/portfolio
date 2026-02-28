import AboutItem from '@/components/molecules/about-item/about-item';
import { useTranslations } from 'next-intl';
import VerticalSeparator from '@/components/atoms/vertical-separator/vertical-separator';

export default function AboutItems() {
  const translate = useTranslations('About.stats');
  const birthDate = new Date(2001, 4, 21); // May 21, 2001
  const startWorkingDate = new Date(2021, 3, 1); // April 1, 2021

  const getYearsDifference = (from: Date, to: Date) => {
    // Calculate the difference in milliseconds
    const diffInMs = to.getTime() - from.getTime();
    const diffDate = new Date(diffInMs);

    // Extract the year difference as the diff in milliseconds means the time since 1970-01-01
    return Math.abs(diffDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="flex justify-center items-center gap-4 md:gap-10">
      <AboutItem
        value={getYearsDifference(birthDate, new Date())}
        unit={translate('age.unit')}
        description={translate('age.label')}
        className="flex-1"
      />
      <VerticalSeparator/>
      <AboutItem
        value={18} // todo get projects count dynamically
        unit={translate('projects.unit')}
        description={translate('projects.label')}
        className="flex-1"
      />
      <VerticalSeparator/>
      <AboutItem
        value={getYearsDifference(startWorkingDate, new Date())}
        unit={translate('experience.unit')}
        description={translate('experience.label')}
        className="flex-1"
      />
    </div>
  );
};