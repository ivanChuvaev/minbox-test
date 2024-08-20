import { CSSProperties, ComponentPropsWithoutRef } from 'react';

export type TTypographyTagVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'em'
  | 'strong'
  | 'label'
  | 'div';

export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'text-xl'
  | 'text-l'
  | 'text-m-medium'
  | 'text-m-strike'
  | 'text-s-medium'
  | 'text-s-bold'
  | 'text-xs-medium'
  | 'text-xs-bold'
  | 'text-xs-strike'
  | 'text-2xs'
  | 'text-3xs';

export type TTypographyProps<T extends TTypographyTagVariant> = {
  /** element tag that will be rendered, 'span' by default */
  tag?: T;
  variant: TTypographyVariant;
  className?: string;
  style?: CSSProperties;
} & ComponentPropsWithoutRef<T>;
