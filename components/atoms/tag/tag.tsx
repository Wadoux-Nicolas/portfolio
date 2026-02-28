import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

export type TagType = PropsWithChildren<ComponentPropsWithoutRef<'span'>>;

export default function Tag({
  children,
  ...props
}: TagType) {
  return (
    <span
      {...props}
      className={clsx(
        'bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded',
        props.className,
      )}
    >
      {children}
    </span>
  );
}