import { ComponentPropsWithoutRef } from 'react';
import classes from './Paper.module.scss';
import cn from 'classnames';

export function Paper({ children, className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className={cn(classes.paper, className)}>
      <div className={classes.paper__main}>
        {children}
      </div>
      <div className={classes.paper__first} />
      <div className={classes.paper__second} />
    </div>
  )
}
