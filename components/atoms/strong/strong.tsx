import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

export default function Strong({
    children,
    ...props
  }: PropsWithChildren<ComponentPropsWithoutRef<'strong'>>,
) {
  return (
    <strong
      {...props}
      className={clsx(
        'text-secondary',
        props.className,
      )}
    >
      {children}
    </strong>
  );
}