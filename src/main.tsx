import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import App from './App'
import Dashboard from '@pages/dashboard/Dashboard'
import Settings from '@pages/settings/Settings'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
