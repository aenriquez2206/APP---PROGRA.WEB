import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { get as productosApiGet } from '../../api/productosApi' 
import ProductoCard from '../ProductoCard/ProductoCard' 
import MenuLateral from '../MenuLateral/MenuLateral' 
import Paginacion from '../Paginacion/Paginacion'     
import Searcher from '../Searcher/Searcher'           

import './CatalogoPage.css'

export const ProductosCompletos = productosApiGet(); 
const ProductosxPagina = 12;

const CatalogoPage = () => {
    const { categoriaNombre } = useParams();
    
    const [paginaActual, setPaginaActual] = useState(1);
    const [textoBusqueda, setTextoBusqueda] = useState('');
    
    const [productosMostrados, setProductosMostrados] = useState(ProductosCompletos);

    useEffect(() => {
        setPaginaActual(1);
        setTextoBusqueda(''); 
    }, [categoriaNombre]);

    useEffect(() => {
        let productosFiltrados = ProductosCompletos;

        if (categoriaNombre) {
            const categoriaBuscada = categoriaNombre.toLowerCase();
            productosFiltrados = productosFiltrados.filter(producto => 
                producto.categoria.toLowerCase() === categoriaBuscada
            );
        }

        if (textoBusqueda) {
            const textoLimpio = textoBusqueda.toLowerCase();
            productosFiltrados = productosFiltrados.filter(producto => 
                producto.nombre.toLowerCase().includes(textoLimpio) ||
                (producto.descripcion && producto.descripcion.toLowerCase().includes(textoLimpio)) || 
                producto.categoria.toLowerCase().includes(textoLimpio)
            );
        }

        setProductosMostrados(productosFiltrados);
        setPaginaActual(1);
    }, [categoriaNombre, textoBusqueda]);
    
    const totalProductos = productosMostrados.length;
    const totalPaginas = Math.ceil(totalProductos / ProductosxPagina);
    const indiceInicio = (paginaActual - 1) * ProductosxPagina;
    const indiceFin = indiceInicio + ProductosxPagina;
    const productosPagina = productosMostrados.slice(indiceInicio, indiceFin);

    let tituloCategoria;
    if (categoriaNombre) {
        const leido = categoriaNombre.replace(/-/g, ' ');
        tituloCategoria = leido.charAt(0).toUpperCase() + leido.slice(1);
    } else {
        tituloCategoria = 'Catálogo Completo';
    }
    
    return (
        <div className="catalogo-layout">
            <div className="catalogo-content">
                <div className="catalogo-sidebar">
                    <MenuLateral activeCategory={categoriaNombre} />
                </div>
                <div className="productos-area">
                    <div className="catalogo-buscador">
                        <h2>{tituloCategoria}</h2>
                        <Searcher
                            valor={textoBusqueda}
                            render={(value) => setTextoBusqueda(value)} 
                        />
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
}

export default CatalogoPage;
