import Image from 'next/image';
import type { ImageProps } from 'next/dist/shared/lib/get-img-props';

export type FlagProps = {
  flag: FlagCode;
} & Omit<ImageProps, 'src'>;

export type FlagCode = 'fr' | 'es' | 'gb';

export default function Flag({
  flag,
  ...props
}: FlagProps) {
  return (
    <Image
      {...props}
      src={`/flags/${flag}.svg`}
      alt={props.alt || ''}
      width={props.width || 80}
      height={props.height || 55}
    />
  );
}