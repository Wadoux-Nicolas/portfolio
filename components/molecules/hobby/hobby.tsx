import Image from 'next/image';
import React from 'react';

export type HobbyIcon = 'badminton' | 'cook' | 'palm-tree' | 'violin'

export interface HobbyProps {
  icon: HobbyIcon;
  children: React.ReactNode;
}

export default function Hobby({
  icon,
  children,
}: HobbyProps) {
  return (
    <figure className='w-18 md:w-24 text-center gap-2 flex flex-col'>
      <div
        className='rounded-full bg-secondary text-white w-14 h-14 md:w-20 md:h-20 mx-auto flex items-center justify-center'>
        <Image
          alt=''
          src={`/logos/${icon}.svg`}
          width={44}
          height={44}
          className='w-8 h-8 md:w-11 md:h-11'
        />
      </div>
      <figcaption className='leading-none'>
        {children}
      </figcaption>
    </figure>
  );
}