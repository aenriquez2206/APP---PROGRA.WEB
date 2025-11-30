import { useParams, Link } from 'react-router-dom'
import './DetalleProductoPage.css'

import productosApi from '../../api/productosApi'
import categoriasApi from '../../api/categoriasApi'

import ProductoCard from '../../components/ProductoCard/ProductoCard'
import { useCart } from "../PagCarrito/CartContext"

import { useState, useEffect } from 'react'

const DetalleProductoPage = () => {
    const { addToCart } = useCart()
    const { id } = useParams()
    const productId = parseInt(id, 10)

    const [producto, setProducto] = useState(null)
    const [todosLosProductos, setTodosLosProductos] = useState([])
    const [categorias, setCategorias] = useState([])

    const handleOnLoad = async () => {
        try {
            const rawProducto = await productosApi.findOne(id)
            setProducto(rawProducto)

            const rawProductos = await productosApi.findAll()
            setTodosLosProductos(rawProductos)

            const rawCategorias = await categoriasApi.findAll()
            setCategorias(rawCategorias)

        } catch (error) {
            console.error("Error cargando datos", error)
        }
    }

    useEffect(() => {
        handleOnLoad()
    }, [id])

    if (!producto) {
        return (
            <div className="detalle-layout">
                <p className="not-found">Producto no encontrado con ID: {id}</p>
                <Link to="/catalogo" className="volver-link">Volver al Catálogo</Link>
            </div>
        )
    }

    const categoria = categorias.find(c => c.id === producto.categoria_id)

    const productosSimilares = todosLosProductos
        .filter(p =>
            p.id !== productId &&
            p.categoria_id === producto.categoria_id
        )
        .slice(0, 4)

    return (
        <div className="detalle-layout">

            <nav className="breadcrumb">
                <Link to="/">Inicio</Link> &gt;

                {categoria && (
                    <Link to={`/catalogo/${categoria.ruta}`}>
                        {categoria.label}
                    </Link>
                )} &gt;

                {producto.nombre}
            </nav>

            <div className="detalle-principal">
                <div className="detalle-imagen">
                    <img
                        src={producto.img}
                        alt={producto.nombre}
                    />
                </div>

                <div className="detalle-info">
                    <h1 className="detalle-titulo">{producto.nombre}</h1>

                    {producto.descripcion && (
                        <p className="detalle-descripcion">
                            {producto.descripcion}
                        </p>
                    )}

                    <p className="detalle-precio">S/ {producto.precio.toFixed(2)}</p>

                    <button
                        className="detalle-btn-agregar"
                        onClick={() => (addToCart(producto), alert(`✅ Se agregó "${producto.nombre}" al carrito`))}
                    >
                        AGREGAR AL CARRITO
                    </button>
                </div>
            </div>

            {productosSimilares.length > 0 && (
                <div className="slider-container">
                    <h3>Productos similares</h3>

                    <div className="slider-content">
                        {productosSimilares.map(p => (
                            <Link key={p.id} to={`/producto/${p.id}`}>
                                <ProductoCard producto={p} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetalleProductoPage
