import { CSSProperties, ComponentPropsWithoutRef } from 'react';

export type TIconName =
  | 'multimedia-play-duotone'
  | 'multimedia-play'
  | 'multimedia-stop-duotone'
  | 'multimedia-stop'
  | 'search-magnifier-duotone'
  | 'search-magnifier'
  | 'search-magnifier-zoom-in-duotone'
  | 'search-magnifier-zoom-in'
  | 'check-square'
  | 'plus'
  | 'close';

export type TIconProps = {
  name: TIconName;
  className?: string;
  style?: CSSProperties;
  disableCache?: boolean;
} & ComponentPropsWithoutRef<'svg'>;
