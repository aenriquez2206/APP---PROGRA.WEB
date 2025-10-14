import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Forgot from './Forgot.jsx'
import Recover from './Recover.jsx'
import Change from './Change.jsx'
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
  element: <Login/>
},
{
  path:"register",
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
  path: "/detalle-usuario",
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
