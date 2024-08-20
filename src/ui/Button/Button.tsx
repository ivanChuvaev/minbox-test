import { forwardRef } from "react"

import cn from "classnames"
import classes from "./Button.module.scss"
import { TButtonProps } from "./Button.types"


export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ variant = "text", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          classes.button,
          classes[`button--variant-${variant}`],
          className
        )}
        {...props}
      />
    )
  }
)
