import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import clsx from 'clsx';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps<T extends HeadingElement> =
  PropsWithChildren<{
    as?: T;
  }> &
  ComponentPropsWithoutRef<T>;

const defaultHeadingElement: HeadingElement = 'h1';
const sizeMap: Record<HeadingElement, string> = {
  h1: 'sm:text-6xl text-5xl',
  h2: 'sm:text-5xl text-4xl',
  h3: 'sm:text-4xl text-3xl',
  h4: 'sm:text-3xl text-2xl',
  h5: 'sm:text-2xl text-xl',
  h6: 'sm:text-xl text-lg',
};

export default function Title<T extends HeadingElement>({
  children,
  as,
  ...props
}: TitleProps<T>) {
  const Component = as || defaultHeadingElement;

  return (
    <Component
      className={clsx(
        'text-primary relative h-fit w-fit px-8 py-1',
        sizeMap[Component] || sizeMap[defaultHeadingElement],
        props.className,
      )}
      {...props}
    >
      <div className="absolute bg-tertiary top-0 left-0 right-1/2 bottom-1/2 opacity-20"></div>
      <span className="relative">{children}</span>
    </Component>
  );
}