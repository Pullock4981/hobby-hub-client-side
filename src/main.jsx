import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// react router set up
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-2xl font-bold text-center'>Welcome to HobbyHub</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
