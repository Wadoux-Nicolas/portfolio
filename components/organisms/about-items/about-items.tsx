import AboutItem from '@/components/molecules/about-item/about-item';
import VerticalSeparator from '@/components/atoms/vertical-separator/vertical-separator';
import { Fragment } from 'react';

export interface AboutItemProps {
  value: number | string;
  unit: string;
  label: string;
}

export interface AboutItemsProps {
  items: AboutItemProps[];
}

export default function AboutItems({
  items,
}: AboutItemsProps) {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-10">
      {items.map((item, index) => (
        <Fragment key={item.label}>
          <AboutItem
            value={item.value}
            unit={item.unit}
            label={item.label}
            className="flex-1"
          />
          {index < items.length - 1 && <VerticalSeparator/>}
        </Fragment>
      ))}
    </div>
  );
};