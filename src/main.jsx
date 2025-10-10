import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import DashboardAdmin from './routes/DashboardAdmin.jsx'
import ListadoCategoriasAdmin from './routes/ListadoCategoriasAdmin.jsx'
import DetalleUsuario from './routes/DetalleUsuario.jsx'
import DetalleOrden from './routes/DetalleOrden.jsx'
import CambiarContraseña from './routes/CambiarContraseña.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>
},
{
  path:"admin",
  element:<DashboardAdmin/>
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
  path: "/detalle-orden",
    element: <DetalleOrden/>
}
,
{
  path: "/cambiar-contraseña",
    element: <CambiarContraseña/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
