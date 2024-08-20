import { Button } from "@/ui/Button"
import { Icon } from "@/ui/Icon"
import { TButtonIconProps } from "./ButtonIcon.types"
import { forwardRef } from "react"
import classes from './ButtonIcon.module.scss';
import cn from 'classnames';

export const ButtonIcon = forwardRef<HTMLButtonElement, TButtonIconProps>(
  ({ name, className, ...props }, ref) => {
    return (
      <Button ref={ref} className={cn(classes['button-icon'], className)} {...props}>
        <Icon name={name} />
      </Button>
    )
  }
)
