import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
<<<<<<< HEAD
import Login from './Login.jsx'
import Register from './Register.jsx'
import Forgot from './Forgot.jsx'
import Recover from './Recover.jsx'
import Change from './Change.jsx'
=======
import App from './App.jsx'
import DashboardAdmin from './routes/DashboardAdminPage.jsx'
import ProductosAdminPage from './routes/ProductosAdminPage.jsx'
import ProdSetAdminPage from './routes/ProdSetAdminPage.jsx'
import ProdEditAdminPage from './routes/ProdEditAdminPage.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>
},
{
  path:"admin",
  element:<DashboardAdmin/>
},{
  path:"admin/productos",
  element:<ProductosAdminPage/>
},
{
  path:"admin/productos/agregar",
  element:<ProdSetAdminPage/>  
},
{
  path:"admin/productos/editar",
  element:<ProdEditAdminPage/>  
}

])
>>>>>>> 90221b88f0512433300ac697bea7ee3bf566fbf9

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
