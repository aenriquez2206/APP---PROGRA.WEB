import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import productosApi from '../../api/productosApi'
import ProductoCard from '../ProductoCard/ProductoCard' 
import MenuLateral from '../MenuLateral/MenuLateral' 
import Paginacion from '../Paginacion/Paginacion' 

import './CatalogoPage.css'

const ProductosxPagina = 12;

const CatalogoPage = () => {
    const { categoriaNombre } = useParams();
    const location = useLocation();
    
    const [paginaActual, setPaginaActual] = useState(1);
    const [productosCompletos, setProductosCompletos] = useState([]);
    const [productosMostrados, setProductosMostrados] = useState([]);

    const queryParams = new URLSearchParams(location.search);
    const textoBusqueda = queryParams.get('search') || '';

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productosBD = await productosApi.findAll();
                setProductosCompletos(productosBD);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            }
        };
        cargarProductos();
    }, []);

    useEffect(() => {
        let filtrados = productosCompletos;

        if (categoriaNombre) {
            const categoriaBuscada = categoriaNombre.toLowerCase()
            filtrados = filtrados.filter(
                p => p.categoria.toLowerCase() === categoriaBuscada
            )
        }

        if (textoBusqueda) {
            const texto = textoBusqueda.toLowerCase()
            filtrados = filtrados.filter(
                p =>
                    p.nombre.toLowerCase().includes(texto) ||
                    (p.descripcion && p.descripcion.toLowerCase().includes(texto)) ||
                    p.categoria.toLowerCase().includes(texto)
            )
        }

        setProductosMostrados(filtrados);
        setPaginaActual(1);
    }, [categoriaNombre, textoBusqueda, productosCompletos]);

    const totalProductos = productosMostrados.length
    const totalPaginas = Math.ceil(totalProductos / ProductosxPagina)
    const indiceInicio = (paginaActual - 1) * ProductosxPagina
    const indiceFin = indiceInicio + ProductosxPagina

    const productosPagina = productosMostrados.slice(indiceInicio, indiceFin)

    let tituloCategoria;
    if (categoriaNombre) {
        const leido = categoriaNombre.replace(/-/g, ' ')
        tituloCategoria = leido.charAt(0).toUpperCase() + leido.slice(1)
    } else if (textoBusqueda) {
        tituloCategoria = `Resultados para: "${textoBusqueda}"`
    } else {
        tituloCategoria = 'Catálogo Completo'
    }

    return (
        <div className="catalogo-layout">
            <div className="catalogo-content">
                <div className="catalogo-sidebar">
                    <MenuLateral activeCategory={categoriaNombre} />
                </div>

                <div className="productos-area">
                    <div className="catalogo-header">
                        <h2 className="catalogo-titulo">{tituloCategoria}</h2>
                    </div>
                    
                    <div className="productos-grid">
                        {productosPagina.length > 0 ? (
                            productosPagina.map(producto => (
                                <Link 
                                    key={producto.id} 
                                    to={`/producto/${producto.id}`}
                                    className="producto-card-link"
                                >
                                    <ProductoCard producto={producto} />
                                </Link>
                            ))
                        ) : (
                            <p className="no-productos">No hay productos disponibles que coincidan con la búsqueda.</p>
                        )}
                    </div>
                </div>
            </div>

            {totalPaginas > 1 && (
                <div className="catalogo-footer">
                    <Paginacion 
                        totalPaginas={totalPaginas}
                        paginaActual={paginaActual}
                        setPaginaActual={setPaginaActual}
                    />
                </div>
            )}
        </div>
    );
};

export default CatalogoPage;
