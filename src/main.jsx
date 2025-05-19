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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
