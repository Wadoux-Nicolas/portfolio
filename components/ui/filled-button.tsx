import React from 'react';
import clsx from 'clsx';

export default function FilledButton({
  children,
  rounded = false,
  color = 'primary',
  props = {
    type: 'button',
  },
}: {
  children: React.ReactNode,
  rounded?: boolean,
  color?: 'primary' | 'secondary' | 'tertiary',
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>,
}) {
  return (
    <button
      {...props}
      className={clsx(
        'py-2 px-8 text-white transition-colors duration-200 cursor-pointer',
        {
          'rounded-full': rounded,
          'rounded': !rounded,
          'bg-primary hover:bg-primary-600': color === 'primary',
          'bg-secondary hover:bg-secondary-600': color === 'secondary',
          'bg-tertiary hover:bg-tertiary-600': color === 'tertiary',
        },
        props.className,
      )}
    >
      {children}
    </button>
  );
}