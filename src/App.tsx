import { RootProvider } from "@/components/RootProvider"
import { RootRouter } from "@/components/RootRouter"

function App() {
  return (
    <RootProvider localStorageKey="todo-items">
      <RootRouter />
    </RootProvider>
  )
}

export default App
