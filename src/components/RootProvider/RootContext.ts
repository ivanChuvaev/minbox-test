import { TRootContext } from "@/types";
import { createContext, useContext } from "react";
// import { useContextSelector, createContext } from "use-context-selector";

// export const RootContext = createContext<TRootContext>(undefined as unknown as TRootContext);

// export function useRootContext<T>(selector: (state: TRootContext) => T) {
//   return useContextSelector(RootContext, selector);
// }


export const RootContext = createContext<TRootContext | undefined>(undefined);

export function useRootContext() {
  const context = useContext(RootContext);

  if (context === undefined) {
    throw new Error('useRootContext must be called inside <RootProvider>')
  }

  return context;
}
