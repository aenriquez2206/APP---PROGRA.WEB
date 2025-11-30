import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLateral.css'
import categoriasApi from '../../api/categoriasApi'
import { useState, useEffect } from 'react'

const MenuLateral = ({ activeCategory }) => {

    const [todasLasCategorias, setTodasLasCategorias] = useState([])

    const handleOnLoad = async () => {
        const rawcategorias = await categoriasApi.findAll()
        setTodasLasCategorias(rawcategorias)
    }

    useEffect(()=>{
        handleOnLoad()
    }, [])

    return (
        <nav className="menu-lateral">
            <h3 className="menu-titulo">Categorías</h3>
            <ul className="menu-lista">
                {todasLasCategorias.map(cat => (
                    <li key={cat.nombre} className="menu-item">
                        <Link 
                            to={`/catalogo/${cat.ruta}`}
                            className={`menu-link ${activeCategory === cat.nombre ? 'activo' : ''}`}
                        >
                            {cat.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MenuLateral;
