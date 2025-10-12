import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Change from './Change.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Change/>
  </StrictMode>,
)
