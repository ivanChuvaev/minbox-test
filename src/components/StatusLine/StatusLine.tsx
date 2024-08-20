import { CSSProperties, useMemo } from "react"
import cn from "classnames"
import classes from "./StatusLine.module.scss"
import { TTodoItemStatus } from "@/types"
import { SegmentButton } from "@/ui/SegmentButton"
import { Button } from "@/ui/Button"
import { useRootContext } from "@/components/RootProvider"
import { Typography } from "@/ui/Typography"
import { useWindowWidth } from "@/utils/useWindowWidth"

type TStatusLineProps = {
  className?: string
  style?: CSSProperties
}

export function StatusLine({ className, style }: TStatusLineProps) {
  const { todoItems, filter, updateFilter, deleteCompletedItems } = useRootContext()

  const { isLMobile } = useWindowWidth();

  const idleTodoCount = useMemo(
    () =>
      todoItems.reduce(
        (acc, v) => (v.status === TTodoItemStatus.ACTIVE ? acc + 1 : acc),
        0
      ),
    [todoItems]
  )

  const segmentButtonItems = useMemo(
    () => [
      {
        label: "All",
        value: null,
      },
      {
        label: "Active",
        value: TTodoItemStatus.ACTIVE,
      },
      {
        label: "Completed",
        value: TTodoItemStatus.COMPLETED,
      },
    ],
    []
  )

  const handleChangeFilter = (value: string | null) => {
    updateFilter(value as TTodoItemStatus | null)
  }

  return (
    <div className={cn(classes["status-line"], className)} style={style}>
      {isLMobile && (
        <div className={cn(classes["status-line__line"], classes['status-line__line--center'])}>
          <SegmentButton
            items={segmentButtonItems}
            value={filter}
            onChange={handleChangeFilter}
          />
        </div>
      )}

      <div className={classes["status-line__line"]}>
        <Typography variant="text-m-medium">{idleTodoCount} items left</Typography>
        {!isLMobile && (
          <SegmentButton
            typographyVariant="text-m-medium"
            items={segmentButtonItems}
            value={filter}
            onChange={handleChangeFilter}
          />
        )}
        <Button variant="text" onClick={deleteCompletedItems}>
          <Typography variant="text-m-medium">Clear completed</Typography>
        </Button>
      </div>
    </div>
  )
}
