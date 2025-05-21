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
import GroupDetails from './Pages/GroupDetails/GroupDetails';
import UpdateDetails from './Pages/MyGroup/UpdateDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('http://localhost:3000/groups'),
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
      },
      {
        path: "/groupDetails/:id",
        Component: GroupDetails
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/groups/${params.id}`),
        Component: UpdateDetails
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
