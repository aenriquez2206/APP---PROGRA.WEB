import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
<<<<<<< HEAD
import Login from './Login.jsx'
import Register from './Register.jsx'
import Forgot from './Forgot.jsx'
import Recover from './Recover.jsx'
import Change from './Change.jsx'

=======
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Forgot from './components/forgot/Forgot.jsx'
import Recover from './components/recover/Recover.jsx'
import Change from './components/change/Change.jsx'
import App from './App.jsx'
>>>>>>> 18251b1ee6339903a6057bf97dd9c3eb33dbe4de
import DashboardAdminPage from './routes/DashboardAdminPage.jsx'
import ListadoCategoriasAdmin from './routes/ListadoCategoriasAdmin.jsx'
import DetalleUsuario from './routes/DetalleUsuario.jsx'
import DetalleOrden from './routes/DetalleOrden.jsx'
import CambiarContraseña from './routes/CambiarContraseña.jsx'
import ProductosAdminPage from './routes/ProductosAdminPage.jsx'
import ProdSetAdminPage from './routes/ProdSetAdminPage.jsx'
import ProdEditAdminPage from './routes/ProdEditAdminPage.jsx'
import UserAdmin from './routes/UsersAdmin.jsx'
import OrderAdmin from './routes/OrderAdmin.jsx'

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
  path: "/cambiar-contraseña",
    element: <CambiarContraseña/>
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
  path: "/admin/detalle-orden/:id",
  element: <DetalleOrden/>
}
,
{
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
},
{
  path:"admin/users",
  element:<UserAdmin/>
},
{
  path:"admin/orders",
  element:<OrderAdmin/>
}
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)
