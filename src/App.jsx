import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
