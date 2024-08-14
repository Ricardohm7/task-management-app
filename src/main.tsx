import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Sidebar from '@components/Sidebar'
import Dashboard from '@pages/dashboard/Dashboard'
import { Route } from 'wouter'
import Settings from '@pages/settings/Settings'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Route path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  </StrictMode>,
)
