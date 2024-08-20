import { CSSProperties, useRef, useState } from "react"
import classes from "./Checkbox.module.scss"
import cn from "classnames"
import { ButtonIcon } from "../ButtonIcon/ButtonIcon"

type TCheckboxProps = {
  className?: string
  style?: CSSProperties
  value?: boolean
  onChange?: (value: boolean) => void
}

export const Checkbox = ({
  value: externalValue,
  onChange,
  className,
  style,
}: TCheckboxProps) => {
  const [value, setValue] = useState(externalValue)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
    onChange?.(e.target.checked)
  }

  return (
    <div className={cn(classes.checkbox, className)} style={style}>
      <ButtonIcon
        name={value ? 'check-square' : 'multimedia-stop'}
        className={classes['checkbox__icon']}
      />
      <input
        ref={inputRef}
        checked={value}
        type="checkbox"
        className={classes["checkbox__input"]}
        onChange={handleChange}
      />
    </div>
  )
}
