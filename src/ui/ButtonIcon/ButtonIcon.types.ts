import { TIconName } from "@/ui/Icon";
import { TButtonProps } from "@/ui/Button";

export type TButtonIconProps = {
  name: TIconName;
} & Omit<TButtonProps, 'variant'>
