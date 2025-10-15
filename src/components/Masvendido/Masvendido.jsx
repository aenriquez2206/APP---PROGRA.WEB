import React from 'react'
import { Link } from 'react-router-dom'
import ProductoCard from '../ProductoCard/ProductoCard'
import { get as productosApiGet } from '../../api/productosApi'
import './MasVendido.css'

const ProductosCompletos = productosApiGet();

const MasVendido = () => {
    const productosOrdenadosPorStock = ProductosCompletos
        .slice() 
        .sort((a, b) => b.stock - a.stock)
        .slice(0, 4);

    if (productosOrdenadosPorStock.length === 0) {
        return <p className="mas-vendido-titulo">No hay productos disponibles para mostrar.</p>;
    }

    return (
        <div className="mas-vendido-seccion">
            <h2 className="mas-vendido-titulo">Lo más vendido</h2>           
            <div className="mas-vendido-contenedor">
                {productosOrdenadosPorStock.map(producto => (
                    <Link 
                        key={producto.id} 
                        to={`/producto/${producto.id}`} 
                        className="mas-vendido-link"
                    >
                        <ProductoCard producto={producto} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MasVendido;
