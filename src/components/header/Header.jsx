import { useState, useEffect } from 'react'
import './header.css'
import Searcher from '../Searcher/Searcher'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../PagCarrito/CartContext'
import productosApi from '../../api/productosApi'

const Header = () => {
    const navigate = useNavigate();
    const { getTotalPrice } = useCart();
    const precioTotal = getTotalPrice();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false); 
    const todosLosProductos = productosApi.get();
    const handleSearchChange = (text) => {
        setSearchTerm(text);
        setIsSearchActive(false); 
    };

    const handleResultClick = (id) => {
        setSearchTerm('')
        setSearchResults([])
        setIsSearchActive(false)
        navigate(`/producto/${id}`)
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter' && searchTerm.length > 0) {
            const allMatchingProducts = todosLosProductos.filter(producto => 
                producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            )

            if (allMatchingProducts.length === 1) {
                const unicoResultadoId = allMatchingProducts[0].id
                handleResultClick(unicoResultadoId)
            } else {
                setSearchTerm('');
                setSearchResults([]);
                setIsSearchActive(false);
                navigate(`/catalogo?search=${searchTerm}`);
            }
        }
    }

    return (
        <>
            <header id="headerSection">
                <div id="LogoGamePlay">
                    <span><button id="botonInicio" onClick={() => navigate('/')}>GamePlay</button></span>
                    <span id="dotLogo">
                        <h1>.</h1>
                    </span>
                </div>
                <div className="search-container" onKeyDown={handleSearchSubmit}>
                    <Searcher 
                        placeh="Buscar un producto" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                    />
                </div>
                <div className='asd'>
                    <button id="comprasButton" onClick={() => navigate('/carrito')} >
                    <img className="img_header" src="/productosAssets/carritosinfondo.png" alt="img"/>
                    <div className="boton_text">
                        <p>Carrito</p>
                        <div id="precio_soles">
                            <p>S/.</p>
                            <p>{precioTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </button>
                </div>
                <button id="usuarioButton" onClick={() => navigate('/login')}>
                    <img className="img_header" src="/productosAssets/usser2.png" alt="img"/>
                    <div className="boton_text">
                        <p>Usuario</p>
                        <p>Cuenta</p>
                    </div>
                </button>
            </header> 
        </>
    );
}

export default Header;
