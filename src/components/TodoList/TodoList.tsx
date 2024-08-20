import { useRootContext } from "@/components/RootProvider"
import { TodoItem } from "@/components/TodoItem"
import cn from "classnames"

import classes from "./TodoList.module.scss"
import { CSSProperties, useEffect, useMemo, useRef } from "react"
import { useWindowWidth } from "@/utils/useWindowWidth"
import { Typography } from "@/ui/Typography"

type TTodoListProps = {
  className?: string
  style?: CSSProperties
}

export function TodoList({ className, style }: TTodoListProps) {
  const { todoItems, filter } = useRootContext()
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const sizes = useWindowWidth();

  const filteredTodoItems = useMemo(() => {
    if (filter === null) {
      return todoItems
    }
    return todoItems.filter((item) => item.status === filter)
  }, [todoItems, filter])

  const recalculateHeight = () => {
    if (rootRef.current && listRef.current) {
      rootRef.current.style.height = `${listRef.current.clientHeight}px`
    }
  }

  useEffect(() => {
    recalculateHeight()
  }, [filteredTodoItems, sizes])

  return (
    <div
      ref={rootRef}
      className={cn(classes["todo-list"], className)}
      style={style}
    >
      <div ref={listRef} className={classes["todo-list__list"]}>
        {filteredTodoItems.length === 0 && (
          <div className={classes['todo-list__empty']}>
            <Typography variant="text-m-medium">
              EMPTY
            </Typography>
          </div>
        )}
        {filteredTodoItems.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
