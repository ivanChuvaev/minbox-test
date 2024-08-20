import { Checkbox } from "@/ui/Checkbox"
import classes from "./TodoItem.module.scss"
import { TTodoItem, TTodoItemStatus } from "@/types"
import { useRootContext } from "../RootProvider"
import { memo } from "react"
import { Typography } from "@/ui/Typography"
import { ButtonIcon } from "@/ui/ButtonIcon/ButtonIcon"
import cn from 'classnames';

type TTodoItemProps = TTodoItem

function TodoItem_({ status, description, id }: TTodoItemProps) {
  const { toggleTodoItem, deleteTodoItem } = useRootContext()

  return (
    <div className={classes["todo-item"]}>
      <Checkbox
        value={status === TTodoItemStatus.COMPLETED}
        onChange={() => toggleTodoItem(id)}
        className={classes["todo-item__checkbox"]}
      />
      <Typography
        variant={"text-l"}
        className={cn(classes["todo-item__description"], {
          [classes["todo-item__description--completed"]]:
            status === TTodoItemStatus.COMPLETED,
        })}
      >
        {description}
      </Typography>
      <ButtonIcon
        name="close"
        onClick={() => deleteTodoItem(id)}
        className={classes["todo-item__icon"]}
      />
    </div>
  )
}

export const TodoItem = memo(TodoItem_)
