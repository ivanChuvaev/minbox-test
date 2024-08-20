import { ReactNode } from "react";

export enum TTodoItemStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export type TTodoItem = {
  id: string;
  description: string;
  status: TTodoItemStatus;
}

export type TRootContext = {
  todoItems: TTodoItem[];
  filter: TTodoItemStatus | null;
  updateFilter: (status: TTodoItemStatus | null) => void;
  createTodoItem: (item: Omit<TTodoItem, 'id'>) => void;
  updateTodoItem: (id: string, item: TTodoItem) => void;
  deleteTodoItem: (id: string) => void;
  toggleTodoItem: (id: string) => void;
  deleteCompletedItems: () => void;
}

export type TRootProviderProps = {
  localStorageKey: string;
  children?: ReactNode;
}