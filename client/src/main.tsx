import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { AppRoutes } from './AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { FirstLoginProvider } from './contexts/FirstLoginContext'
import { ThemeProvider } from './contexts/Themeprovider'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstLoginProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </FirstLoginProvider>
  </StrictMode>
)
