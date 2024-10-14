import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from './Layout/Layout';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import SignIn from './Pages/Forms/SignIn';
import SignUp from './Pages/Forms/SignUp';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
