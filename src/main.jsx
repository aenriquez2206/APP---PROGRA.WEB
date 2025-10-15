import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Forgot from './components/forgot/Forgot.jsx'
import Recover from './components/recover/Recover.jsx'
import Change from './components/change/Change.jsx'
import App from './App.jsx'
import DashboardAdminPage from './routes/DashboardAdminPage.jsx'
import ListadoCategoriasAdmin from './routes/ListadoCategoriasAdmin.jsx'
import DetalleUsuario from './routes/DetalleUsuario.jsx'
import DetalleOrden from './routes/DetalleOrden.jsx'
import CambiarContraseña from './routes/CambiarContraseña.jsx'
import ProductosAdminPage from './routes/ProductosAdminPage.jsx'
import ProdSetAdminPage from './routes/ProdSetAdminPage.jsx'
import ProdEditAdminPage from './routes/ProdEditAdminPage.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>
},
{
  path:"login",
  element:<Login/>  
},
{
  path:"register",
  element:<Register/>  
},
{
  path:"forgot",
  element:<Forgot/>
},
{
  path:"recover",
  element:<Recover/>
},
{
  path:"change",
  element:<Change/>
},
{
  path:"admin",
  element:<DashboardAdminPage/>
},
{
  path: "/admin/categorias",
    element: <ListadoCategoriasAdmin/>
}
,
{
  path: "/admin/detalle-usuario",
    element: <DetalleUsuario/>
}
,
{
  path: "/detalle-orden/:id",
  element: <DetalleOrden/>
}
,
{
  path: "/cambiar-contraseña",
    element: <CambiarContraseña/>
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

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)
