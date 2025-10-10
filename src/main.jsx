import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import PagCarrito from './components/PagCarrito/PagCarrito.jsx'
import PagCheckout from './components/PagCheckout/PagCheckout.jsx'
import CheckoutPago from './components/ChekoutPago/CheckoutPago.jsx'
import CheckoutPago2 from './components/CheckoutPago2/CheckoutPago2.jsx'
import CheckoutPago1 from './components/CheckoutPago1/CheckoutPago1.jsx'
import CheckoutGracias from './components/CheckoutGracias/CheckoutGracias.jsx'

const router = createBrowserRouter([
{
  path:"/",
  element: <PagCarrito/>
},
{
  path:"PagCheckout",
  element:<PagCheckout/>
},
{
  path:"CheckoutPago",
  element:<CheckoutPago/>
},
{
  path:"QR",
  element:<CheckoutPago1/>
},
{
  path: "Tarjeta",
  element:<CheckoutPago2/>
},

{
  path: "OrdenCompletada",
  element:<CheckoutGracias/>
},

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
