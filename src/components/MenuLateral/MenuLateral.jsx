import React from 'react'
import { Link } from 'react-router-dom'
import './MenuLateral.css'

const categorias = [
    { nombre: "videojuegos", label: "Videojuegos" },
    { nombre: "consolas", label: "Consolas" },
    { nombre: "perifericos", label: "Periféricos" },
    { nombre: "coleccionables", label: "Coleccionables" },
    { nombre: "membresias", label: "Membresías" },
    { nombre: "merch", label: "Merch" },
    { nombre: "componentes-pc", label: "Componentes PC" },
    { nombre: "juguetes", label: "Juguetes" }
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
