import Flag, { FlagCode } from '@/components/atoms/flag/flag';
import React from 'react';

export interface SpokenLanguageFlagProps {
  flag: FlagCode;
  alt: string;
  children: React.ReactNode;
}

/**
 * A figure representing a single spoken language with its flag
 * @param flag language's flag to be displayed
 * @param alt alternative text to be displayed and used by screen readers
 * @param children
 * @constructor
 */
export default function SpokenLanguageFlag({
  flag,
  alt,
  children,
}: SpokenLanguageFlagProps) {
  return (
    <figure className='w-20 text-center gap-2 flex flex-col justify-center items-center'>
      <Flag flag={flag} alt={alt} className='w-14 h-9 md:w-20 md:h-12 object-cover rounded-lg'/>
      <figcaption className='leading-none'>
        {children}
      </figcaption>
    </figure>
  );
}
