import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import PaginaCatalogo from './routes/PaginaCatalogo.jsx'
import PaginaDetalleProducto from './routes/PaginaDetalleProducto.jsx'
import PaginaPrincipal from './routes/PaginaPrincipal.jsx'

const router = createBrowserRouter([
{
    path: "/",
    element: <PaginaPrincipal />
},
{
    path: "/catalogo",
    element: <PaginaCatalogo />
},
{
    path: "/categorias/:categoriaNombre",
    element: <PaginaCatalogo />
},
{
    path: "/producto/:id",
    element: <PaginaDetalleProducto />
}
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router = {router} />
    </StrictMode>,
)