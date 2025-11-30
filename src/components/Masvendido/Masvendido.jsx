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
                    <ProductoCard key = {producto.id} producto = {producto} />
                ))}
            </div>
        </div>
    );
};

export default MasVendido;
