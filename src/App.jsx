import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
