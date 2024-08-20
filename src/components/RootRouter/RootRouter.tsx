import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "@/pages/Main";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main
  }
])

export function RootRouter() {
  return (
    <RouterProvider router={router} />
  )
}