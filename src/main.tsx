import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
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
