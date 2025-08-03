import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { UrlObject } from 'node:url';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export default function LinkButton({
  children,
  href,
  color = 'primary',
}: {
  children: React.ReactNode,
  href: string | UrlObject,
  color?: 'primary' | 'secondary' | 'tertiary',
}) {
  return (
    <Link
      className={clsx(
        'p-1 transition-colors duration-200 text-sm flex items-center cursor-pointer',
        {
          'text-primary hover:text-primary-600': color === 'primary',
          'text-secondary hover:text-secondary-600': color === 'secondary',
          'text-tertiary hover:text-tertiary-600': color === 'tertiary',
        },
      )}
      href={href}
    >
      {children}
      <ChevronRightIcon className={'w-5'}/>
    </Link>
  );
}