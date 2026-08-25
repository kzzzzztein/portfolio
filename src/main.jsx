import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeProvider.jsx'
import SmoothScroll from './components/layout/SmoothScroll.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
