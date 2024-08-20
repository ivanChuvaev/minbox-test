import { ICON_MAX_CACHE } from "@/constants";
import React, { ComponentProps } from "react";

const iconCache = new Map<
  string,
  React.LazyExoticComponent<React.ComponentType<ComponentProps<"svg">>>
>()

/** loads icon and saves it to cache, max amount of icons in cache is constant ICON_MAX_CACHE */
export const loadIcon = (name: string, cached: boolean) => {
  if (!cached) {
    return React.lazy(() => import(`../assets/icons/${name}.svg`))
  }

  const icon = iconCache.get(name)
  if (icon) {
    return icon
  }

  const newIcon = React.lazy(() => import(`../assets/icons/${name}.svg`))
  iconCache.set(name, newIcon)

  if (iconCache.size > ICON_MAX_CACHE) {
    let i = iconCache.size - ICON_MAX_CACHE;
    const keysIterable = iconCache.keys();
    while (i > 0) {
      const key = keysIterable.next().value;
      iconCache.delete(key);
      i -= 1;
    }
  }

  return newIcon
}