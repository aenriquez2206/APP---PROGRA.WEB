import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLateral.css'
import categoriasApi from '../../api/categoriasApi'

const MenuLateral = ({ activeCategory }) => {
    const categorias = categoriasApi.get()
    return (
        <nav className="menu-lateral">
            <h3 className="menu-titulo">Categorías</h3>
            <ul className="menu-lista">
                {categorias.map(cat => (
                    <li key={cat.nombre} className="menu-item">
                        <Link 
                            to={`/categorias/${cat.nombre}`}
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
