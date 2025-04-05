import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AQIContextProvider } from './context/AQIContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AQIContextProvider>
    <App />
    </AQIContextProvider>
  </StrictMode>,
)
