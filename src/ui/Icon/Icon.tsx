import cx from "classnames"

import classes from "./Icon.module.scss"
import { TIconProps } from "./Icon.types"
import { Suspense } from "react"
import { loadIcon } from "@/utils/loadIcon"

export const Icon = ({
  name,
  viewBox = "0 0 24 24",
  width = "24",
  height = "24",
  className,
  disableCache = false,
  ...props
}: TIconProps) => {
  const DynamicIcon = loadIcon(name, !disableCache);

  return (
    <Suspense
      fallback={
        <svg
          data-name={name}
          className={cx(classes.icon, className)}
          viewBox={viewBox}
          width={width}
          height={height}
          {...props}
        />
      }
    >
      <DynamicIcon
        data-name={name}
        className={cx(classes.icon, className)}
        viewBox={viewBox}
        width={width}
        height={height}
        {...props}
      />
    </Suspense>
  )
}
