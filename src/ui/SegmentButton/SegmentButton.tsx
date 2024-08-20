import { useEffect, useState } from "react"
import classes from "./SegmentButton.module.scss"
import cn from 'classnames'
import { TTypographyVariant, Typography } from "@/ui/Typography"

type TSegmentButtonItem = {
  label: string
  value: string | null
}

type TSegmentButtonProps = {
  items: TSegmentButtonItem[]
  value?: string | null
  onChange?: (value: string | null) => void;
  typographyVariant?: TTypographyVariant;
}

export function SegmentButton({ items, value, onChange, typographyVariant = 'text-l' }: TSegmentButtonProps) {
  const [innerValue, setInnerValue] = useState<string | null>(value ?? null)

  const handleChange = (value: string | null) => {
    setInnerValue(value);
    onChange?.(value);
  }

  useEffect(() => {
    setInnerValue(value ?? null);
  }, [value])

  return (
    <div className={classes["segment-button"]}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleChange(item.value)}
          className={cn(
            classes["segment-button__item"],
            {
              [classes["segment-button__item--active"]]: item.value === innerValue
            }
          )}
        >
          <Typography variant={typographyVariant}>
            {item.label}
          </Typography>
        </button>
      ))}
    </div>
  )
}
