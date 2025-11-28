import React from 'react'
import { Link } from 'react-router-dom'
import ProductoCard from '../ProductoCard/ProductoCard'
import productosApi from '../../api/productosApi'
import {useState, useEffect} from 'react'
import './MasVendido.css'

const MasVendido = () => {

    const [ProductosCompletos,setProductosCompletos] = useState([])
    
    const handleOnLoad = async () =>{
        const rawproductos = await productosApi.findAll();
        setProductosCompletos(rawproductos);
    }

    useEffect(() => {
        handleOnLoad()
    }, [])

    const productosOrdenadosPorStock = ProductosCompletos
        .slice() 
        .sort((a, b) => b.stock - a.stock)
        .slice(0, 4);

    return (
        <div className="mas-vendido-seccion">
            <h2 className="mas-vendido-titulo">Lo más vendido</h2>           
            <div className="mas-vendido-contenedor">
                {productosOrdenadosPorStock.map(producto => (
                    <Link to={`/producto/${producto.id}`} className="producto-card-link">
                        <div className="producto-card">
                        <div className="producto-img-container">
                        <img src={producto.img} alt={producto.nombre} className="producto-imagen" />
                        </div>
                        <div className="producto-info">
                            <h3 className="producto-titulo">{producto.nombre}</h3>
                            <div className="producto-precio">S/{producto.precio}</div>         
                            <button className="producto-boton-agregar">AGREGAR</button>
                        </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MasVendido;
