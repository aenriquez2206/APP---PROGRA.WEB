import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DashboardAdmin from './routes/DashboardAdminPage.jsx'
import ProductosAdminPage from './routes/ProductosAdminPage.jsx'
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
  path:"admin/productos/editar",
  element:<ProdEditAdminPage/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
