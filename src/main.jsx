import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import PagCarrito from './components/PagCarrito/PagCarrito.jsx'
import PagCheckout from './components/PagCheckout/PagCheckout.jsx'
import CheckoutPago from './components/ChekoutPago/CheckoutPago.jsx'

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
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
