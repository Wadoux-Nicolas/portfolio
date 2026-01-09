import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type AboutItemProps = {
  value: number | string;
  unit: string;
  description: string;
} & PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export default function AboutItem({
  value,
  unit,
  description,
  className,
  ...props
}: AboutItemProps) {
  return (
    <strong
      {...props}
      className={clsx('text-tertiary flex flex-col items-center text-center font-normal text-xs sm:text-md md:text-2xl', className)}
    >
      <span
        className="text-secondary text-md xs:text-lg md:text-4xl"
      >
        {value} <span className="text-primary">{unit}</span>
      </span>
      {description}
    </strong>
  );
};