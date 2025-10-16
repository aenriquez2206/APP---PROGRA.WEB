import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import productosApi from '../../api/productosApi'
import ProductoCard from '../ProductoCard/ProductoCard' 
import MenuLateral from '../MenuLateral/MenuLateral' 
import Paginacion from '../Paginacion/Paginacion'

import './CatalogoPage.css'

const ProductosxPagina = 12;

const CatalogoPage = () => {
    const ProductosCompletos = productosApi.get()
    const { categoriaNombre } = useParams();
    const [paginaActual, setPaginaActual] = useState(1);
    
    const [productosMostrados, setProductosMostrados] = useState(ProductosCompletos);

    useEffect(() => {
        setPaginaActual(1);
    }, [categoriaNombre]);

    useEffect(() => {
        let productosFiltrados = ProductosCompletos;

        if (categoriaNombre) {
            const categoriaBuscada = categoriaNombre.toLowerCase();
            productosFiltrados = productosFiltrados.filter(producto => 
                producto.categoria.toLowerCase() === categoriaBuscada
            );
        }
        setProductosMostrados(productosFiltrados);
        setPaginaActual(1);
    }, [categoriaNombre]);
    
    const totalProductos = productosMostrados.length;
    const totalPaginas = Math.ceil(totalProductos / ProductosxPagina);
    const indiceInicio = (paginaActual - 1) * ProductosxPagina;
    const indiceFin = indiceInicio + ProductosxPagina;
    const productosPagina = productosMostrados.slice(indiceInicio, indiceFin);
    
    return (
        <div className="catalogo-layout">
            <div className="catalogo-content">
                <div className="catalogo-sidebar">
                    <MenuLateral activeCategory={categoriaNombre} />
                </div>
                <div className="productos-area">

                    
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
}

export default CatalogoPage;
