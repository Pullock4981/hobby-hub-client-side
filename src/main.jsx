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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        index: true,
        path: "/",
        element: <div>Home</div>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
