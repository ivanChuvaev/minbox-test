import { CSSProperties, useRef, useState } from "react"
import classes from "./CreateTodoItem.module.scss"
import { Icon } from "@/ui/Icon"
import { useRootContext } from "@/components/RootProvider"
import { TTodoItemStatus } from "@/types"
import cn from "classnames"
import { Typography } from "@/ui/Typography"
import { ButtonIcon } from "@/ui/ButtonIcon/ButtonIcon"

type TCreateTodoItem = {
  className?: string
  style?: CSSProperties
}

/** component that handles logic of creation to-do item, it uses RootContext */
export function CreateTodoItem({ className, style }: TCreateTodoItem) {
  const inputDivRef = useRef<HTMLDivElement>(null)
  const placeholderDivRef = useRef<HTMLDivElement>(null)
  const [isEmpty, setIsEmpty] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const { createTodoItem, filter } = useRootContext()

  const clear = () => {
    if (inputDivRef.current) {
      inputDivRef.current.innerHTML = ""
      setIsEmpty(true);
    }
  }

  const handleSubmit = () => {
    if (inputDivRef.current && inputDivRef.current.innerText) {
      createTodoItem({
        description: inputDivRef.current.innerText,
        status: filter ?? TTodoItemStatus.ACTIVE,
      })
      setTimeout(clear)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
    setIsEmpty(e.target.innerText.length === 0)
  }

  return (
    <div className={cn(classes["create-todo-item"], className)} style={style}>
      <Icon
        name="multimedia-play"
        className={classes["create-todo-item__start-icon"]}
      />
      <div className={classes["create-todo-item__input-wrapper"]}>
        <Typography
          tag="div"
          variant="text-l"
          ref={inputDivRef}
          onInput={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={classes["create-todo-item__input"]}
          contentEditable
        />
        {isEmpty && (
          <Typography
            ref={placeholderDivRef}
            variant="text-l"
            tag="div"
            className={cn(classes["create-todo-item__placeholder"], {
              [classes["create-todo-item__placeholder--focus"]]: isFocused,
            })}
          >
            What needs to be done?
          </Typography>
        )}
      </div>
      {!isEmpty && (
        <div className={classes['create-todo-item__end-icons']}>
          <ButtonIcon
            name="plus"
            onClick={handleSubmit}
            className={classes["create-todo-item__end-icon"]}
          />
          <ButtonIcon
            name="close"
            onClick={clear}
            className={classes["create-todo-item__end-icon"]}
          />
        </div>
      )}
    </div>
  )
}
