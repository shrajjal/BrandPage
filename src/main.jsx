import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HeroSection from './components/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HeroSection />
  </StrictMode>,
)
