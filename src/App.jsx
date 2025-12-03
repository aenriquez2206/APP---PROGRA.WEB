import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PagCarrito from './components/PagCarrito/PagCarrito.jsx'
import PagCheckout from './components/PagCheckout/PagCheckout.jsx'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx'
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx'
import Forgot from './components/forgot/Forgot.jsx'
import Recover from './components/recover/Recover.jsx'
import Change from './components/change/Change.jsx'
import DashboardAdminPage from './routes/DashboardAdminPage.jsx'
import ListadoCategoriasAdmin from './routes/ListadoCategoriasAdmin.jsx'
import SetCategoriasPage from './routes/SetCategoriaPage'
import DetalleUsuario from './routes/DetalleUsuario.jsx'
import DetalleOrden from './routes/DetalleOrden.jsx'
import CambiarContraseña from './routes/CambiarContraseña.jsx'
import ProductosAdminPage from './routes/ProductosAdminPage.jsx'
import ProdSetAdminPage from './routes/ProdSetAdminPage.jsx'
import UserAdmin from './routes/UsersAdmin.jsx'
import OrderAdmin from './routes/OrderAdmin.jsx'
import PaginaCatalogo from './routes/PaginaCatalogo.jsx'
import PaginaDetalleProducto from './routes/PaginaDetalleProducto.jsx'
import PaginaPrincipal from './routes/PaginaPrincipal.jsx'
import CheckoutPago from './components/CheckoutPago/CheckoutPago.jsx'
import CheckoutPago1 from './components/CheckoutPago1/CheckoutPago1.jsx'
import CheckoutPago2 from './components/CheckoutPago2/CheckoutPago2.jsx'
import CheckoutGracias from './components/CheckoutGracias/CheckoutGracias.jsx'
import ListaO from './components/Listado_Ordenes/ListadoOrdenes.jsx'
import MisOrdenes from './components/MisOrdenes/MisOrdenes.jsx'
import { CartProvider } from "./components/PagCarrito/CartContext.jsx"
import { UserProvider } from './context/UserContext.jsx'

const router = createBrowserRouter([

  { path: "/", element: <PaginaPrincipal/> },
  { path: "/catalogo", element: <PaginaCatalogo /> },
  { path: "/catalogo/:categoriaNombre", element: <PaginaCatalogo /> },
  { path: "/producto/:id", element: <PaginaDetalleProducto /> },

  { path: "login", element: <Login/> },
  { path: "register", element: <Register/> },
  { path: "forgot", element: <Forgot/> },
  { path: "recover", element: <Recover/> },
  { path: "change", element: <Change/> },

  {
  
    element: <ProtectedRoute allowedRoles={['cliente']} />,
    children: [
      { path: "/carrito", element: <PagCarrito /> },
      { path: "/carrito/checkout", element: <PagCheckout /> },
      { path: "/carrito/checkout/pago", element: <CheckoutPago /> },
      { path: "/carrito/checkout/pago/qr", element: <CheckoutPago1 /> },
      { path: "/carrito/checkout/pago/tarjeta", element: <CheckoutPago2 /> },
      { path: "/carrito/compraexitosa", element: <CheckoutGracias /> },
      { path: "/misordenes", element: <MisOrdenes/> },
      { path: "/detalle-orden/:id", element: <DetalleOrden/> },
    ]
  },
  
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      { path: "admin", element: <DashboardAdminPage/> },
      { path: "admin/detalle-usuario", element: <DetalleUsuario/> },
      { path: "admin/detalle-orden/:id", element: <DetalleOrden/> },
      { path: "admin/productos", element: <ProductosAdminPage/> },
      { path: "admin/productos/agregar", element: <ProdSetAdminPage/> },
      { path: "admin/users", element: <UserAdmin/> },
      { path: "admin/orders", element: <OrderAdmin/> },
      { path: "admin/categorias", element: <ListadoCategoriasAdmin/> },
      { path: "admin/categorias/agregar", element: <SetCategoriasPage/> },
    ]
  },
  
  {
    element: <ProtectedRoute />, 
    children: [
      { path: "/cambiar-contraseña", element: <CambiarContraseña/> },
    ]
  }
]);

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  )
}

export default App