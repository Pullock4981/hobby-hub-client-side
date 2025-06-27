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
import PrivateRoute from './Components/Routes/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import DashboardHome from './Components/DashBoard/DashboardHome';
import Profile from './Pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch("https://hobby-hub-server-tawny.vercel.app/groups"); // Use your actual API
          return res.json();
        },
        Component: Home
      },
      {
        path: "/allGroup",
        Component: AllGroups
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
        // Component: GroupDetails
        element: <PrivateRoute><GroupDetails /></PrivateRoute>
      },
      {
        path: "/updateGroup/:id",
        loader: ({ params }) => fetch(`https://hobby-hub-server-tawny.vercel.app/groups/${params.id}`),
        // Component: UpdateDetails
        element: <PrivateRoute><UpdateDetails /></PrivateRoute>
      }
    ]
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <DashboardHome />,
        loader: async () => {
          const res = await fetch('https://hobby-hub-server-tawny.vercel.app/groups');
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: 'createGroup', // ✅ relative path
        element: <CreateGroup />
      },
      {
        path: "myGroup", // ✅ Relative path
        element: <MyGroup />,
        loader: async () => {
          const res = await fetch('https://hobby-hub-server-tawny.vercel.app/groups');
          return res.json();
        },
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },

    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router} />
    </FirebaseAuthProvider>
  </StrictMode>,
)
