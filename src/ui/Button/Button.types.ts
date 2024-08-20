import { ComponentPropsWithoutRef } from "react"

export type TButtonVariant = "text"

export type TButtonProps = {
  variant?: TButtonVariant
} & ComponentPropsWithoutRef<"button">
