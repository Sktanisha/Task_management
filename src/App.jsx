import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';

import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ResetPassword from './pages/ResetPassword';
import Layout from './components/Layout';

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
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>,
  }
]);
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    
  )
}

export default App
