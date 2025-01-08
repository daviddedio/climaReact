import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import { WheaterApps } from './component/WheaterApps'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheaterApps />
  </StrictMode>,
)
