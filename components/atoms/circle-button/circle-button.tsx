import React, { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import clsx from 'clsx';

const defaultComponentElement = 'button';
type defaultComponentElementType = typeof defaultComponentElement;

// Generic definition of props based on a component type passed by 'as' prop
// - ref isn't forwarded for now, so we use ComponentPropsWithoutRef
type CircleButtonPropsFromType<ComponentType extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<ComponentType> &
  {
    as?: ComponentType;
  }
>;

// CircleButtonProps type that extends the generic props and adds specific properties
type CircleButtonProps<ComponentType extends ElementType = defaultComponentElementType> =
  CircleButtonPropsFromType<ComponentType> & {
  size?: 'sm' | 'md';
  backgroundImage?: string;
};

export default function CircleButton<ComponentType extends ElementType = defaultComponentElementType>({
  children,
  as,
  size = 'md',
  backgroundImage,
  ...props
}: CircleButtonProps<ComponentType>) {

  const Component = as || defaultComponentElement;

  return (
    <Component
      {...props}
      className={clsx(
        'rounded-full duration-200 cursor-pointer text-white truncate text-center',
        backgroundImage ? 'transition-all hover:brightness-90 filter' : 'transition-colors bg-secondary hover:bg-secondary-600',
        size === 'sm' ? 'w-10 h-10 text-xl leading-10' : 'w-15 h-15 text-2xl leading-15',
        props.className,
      )}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        ...props.style,
      } : props.style}
    >
      {children}
    </Component>
  );
}