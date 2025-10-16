import './header.css'
import Searcher from '../Searcher/Searcher'
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';


const Header = ()=>{
    const navigate = useNavigate();
    const { getTotalPrice } = useCart(); // accedes al total del carrito
    const precioTotal = getTotalPrice();

    return(
    <>
    <header  id="headerSection">
            <div id="LogoGamePlay">
                    <span><button id="botonInicio" onClick={() => navigate('/')}>GamePlay</button></span>
                    <span  id="dotLogo">
                        <h1>.</h1>
                    </span>
            </div>
            <Searcher placeh ="Buscar un producto"/>
            <button id="comprasButton" onClick={() => navigate('/carrito')} >
                <img class="img_header" src="/productosAssets/carritosinfondo.png" alt="img"/>
                <div class="boton_text">
                    <p>Carrito</p>
                    <div id="precio_soles"><p>S/.</p>
                    <p>{precioTotal.toFixed(2)}</p>
                    </div>
                </div>
            </button>
            <button id="usuarioButton" >
                <img class="img_header" src="/productosAssets/usser2.png" alt="img" onClick={() => navigate('/login')}/>
                <div class="boton_text">
                    <p>Usuario</p>
                    <p>Cuenta</p>
                </div>
            </button>
        </header>   
    </>
    )
}

export default Header