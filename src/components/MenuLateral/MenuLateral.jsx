import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLateral.css'

const categorias = [
    { name: "videojuegos", label: "Videojuegos" },
    { name: "consolas", label: "Consolas" },
    { name: "perifericos", label: "Periféricos" },
    { name: "coleccionables", label: "Coleccionables" },
    { name: "membresias", label: "Membresías" },
    { name: "merch", label: "Merch" },
    { name: "componentes-pc", label: "Componentes PC" },
    { name: "juguetes", label: "Juguetes" }
];

const MenuLateral = ({ activeCategory }) => {
    return (
        <nav className="menu-lateral">
            <h3 className="menu-titulo">Categorías</h3>
            <ul className="menu-lista">
                <li className="menu-item">
                    <Link
                        to="/catalogo"
                        className={`menu-link ${activeCategory === null ? 'activo' : ''}`}
                    >
                        Todo el Catálogo
                    </Link>
                </li>
                {categorias.map(cat => (
                    <li key={cat.name} className="menu-item">
                        <Link 
                            to={`/categorias/${cat.name}`}
                            className={`menu-link ${activeCategory === cat.name ? 'activo' : ''}`}
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
