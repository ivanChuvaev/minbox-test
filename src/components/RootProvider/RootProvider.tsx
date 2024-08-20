import { TRootProviderProps, TTodoItem, TTodoItemStatus } from "@/types"
import { RootContext } from "./RootContext"
import { useLocalStorage } from "@/utils/useLocalStorage"
import { useCallback, useMemo } from "react"
import { generateUUID } from "@/utils/generateUUID"

/** provider of todo items and all methods to manipulate them */
export function RootProvider({
  children,
  localStorageKey,
}: TRootProviderProps) {
  const [todoItems, setTodoItems] = useLocalStorage<TTodoItem[]>(
    localStorageKey,
    []
  );

  /** update state in local storage without triggering syncronization */
  // const setTodoItemsWithoutSync = useCallback((value: SetStateAction<TTodoItem[]>) => {
  //   if (value instanceof Function) {
  //     const rawValue = window.localStorage.getItem(localStorageKey);
  //     const oldValue = rawValue ? JSON.parse(rawValue) : [];
  //     const newValue = value(oldValue);
  //     window.localStorage.setItem(localStorageKey, JSON.stringify(newValue));
  //     return;
  //   }
  //   window.localStorage.setItem(localStorageKey, JSON.stringify(value));
  // }, [localStorageKey])

  const [filter, updateFilter] = useLocalStorage<TTodoItemStatus | null>(
    `${localStorageKey}-fitler`,
    null
  )

  /** creates new todo item */
  const createTodoItem = useCallback(
    (item: Omit<TTodoItem, "id">) => {
      setTodoItems((prev) => {
        const newItem: TTodoItem = { ...item, id: generateUUID() }
        prev.push(newItem)
        return [...prev]
      })
    },
    [setTodoItems]
  )

  /** updates existing todo item, will have no effect if item is not in array */
  const updateTodoItem = useCallback(
    (id: string, item: TTodoItem) => {
      setTodoItems((prev) => {
        const found = prev.find((it) => it.id === id)
        if (found) {
          Object.assign(found, item)
        }
        return [...prev]
      })
    },
    [setTodoItems]
  )

  /** deletes existing todo item, will have no effect if item is not in array */
  const deleteTodoItem = useCallback(
    (id: string) => {
      setTodoItems((prev) => {
        const index = prev.findIndex((item) => item.id === id)
        if (index !== -1) {
          prev.splice(index, 1)
        }
        return [...prev]
      })
    },
    [setTodoItems]
  )

  /** toggles existing todo item, will have not effect if item is not in array */
  const toggleTodoItem = useCallback(
    (id: string) => {
      setTodoItems((prev) => {
        const found = prev.find((item) => item.id === id)
        if (found) {
          found.status =
            found.status === TTodoItemStatus.COMPLETED
              ? TTodoItemStatus.ACTIVE
              : TTodoItemStatus.COMPLETED
        }
        return [...prev]
      })
    },
    [setTodoItems]
  )

  const deleteCompletedItems = useCallback(() => {
    setTodoItems((prev) => {
      return prev.filter((item) => item.status !== TTodoItemStatus.COMPLETED)
    })
  }, [setTodoItems])

  const value = useMemo(
    () => ({
      filter,
      todoItems,
      updateFilter,
      createTodoItem,
      updateTodoItem,
      deleteTodoItem,
      toggleTodoItem,
      deleteCompletedItems,
    }),
    [
      filter,
      todoItems,
      updateFilter,
      createTodoItem,
      updateTodoItem,
      deleteTodoItem,
      toggleTodoItem,
      deleteCompletedItems,
    ]
  )

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>
}
