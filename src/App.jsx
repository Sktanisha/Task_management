import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "*",
    element: <NotFound/>
  },
  {
    path: "/signin",
    element: <Signin/>,
  }
]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
