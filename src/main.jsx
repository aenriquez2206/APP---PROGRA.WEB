import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Forgot from './Forgot.jsx'
import Recover from './Recover.jsx'
import Change from './Change.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/change" element={<Change />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
