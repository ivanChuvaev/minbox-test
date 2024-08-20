import { ReactElement, Ref, forwardRef } from 'react';

import cx from 'classnames';

import classes from './Typography.module.scss';
import { TTypographyProps, TTypographyTagVariant } from './Typography.types';

function Typography_<T extends TTypographyTagVariant>(
  {
    tag = 'span' as T,
    variant,
    className,
    style,
    children,
    ...props
  }: TTypographyProps<T>,
  ref?: Ref<HTMLElementTagNameMap[T]>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = tag;

  return (
    <Component
      ref={ref}
      className={cx(
        classes.typography,
        classes[`typography--variant-${variant}`],
        className,
      )}
      style={style}
      {...(props)}
    >
      {children}
    </Component>
  );
}

/** Typography component */
export const Typography = forwardRef(Typography_) as <
  T extends TTypographyTagVariant,
>(
  props: TTypographyProps<T> & { ref?: Ref<HTMLElementTagNameMap[T]> },
) => ReactElement;
