import React from 'react';
import clsx from 'clsx';

export default function CircleButton({
  children,
  size = 'md',
  backgroundImage,
  props = {
    type: 'button',
  },
}: {
  children?: React.ReactNode,
  size?: 'sm' | 'md',
  backgroundImage?: string,
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>,
}) {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-full duration-200 cursor-pointer text-white truncate',
        backgroundImage ? 'transition-all hover:brightness-10 filter' : 'transition-colors bg-secondary hover:bg-secondary-600',
        size === 'sm' ? 'w-10 h-10 text-xl' : 'w-15 h-15 text-2xl',
        props.className,
      )}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {children}
    </button>
  );
}