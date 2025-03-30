import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { AppRoutes } from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { FirstLoginProvider } from './contexts/FirstLoginContext'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstLoginProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FirstLoginProvider>
  </StrictMode>
)
