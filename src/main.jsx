import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// react router set up
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root';
import ErrorComponent from './Components/ErrorComponent/ErrorComponent';
import Home from './Pages/Home/Home';
import AllGroups from './Pages/AllGroups/AllGroups';
import CreateGroup from './Pages/CreateGroup/CreateGroup';
import MyGroup from './Pages/MyGroup/MyGroup';
import Login from './Pages/Home/Login';
import Register from './Pages/Home/Register';
import FirebaseAuthProvider from './Contexts/FirebaseAuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home
      },
      {
        path: "/allGroup",
        Component: AllGroups
      },
      {
        path: "/createGroup",
        Component: CreateGroup
      },
      {
        path: "/myGroup",
        Component: MyGroup
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </StrictMode>,
)
