import './header.css'
import Searcher from '../Searcher/Searcher'
import { Navigate, useNavigate } from 'react-router-dom';

const Header = ()=>{
    const navigate = useNavigate();
    
    return(
    <>
    <header  id="headerSection">
            <div id="LogoGamePlay">
                    <span><h1>GamePlay</h1></span>
                    <span  id="dotLogo">
                        <h1>.</h1>
                    </span>
            </div>
            <Searcher/>
            <button id="comprasButton" onClick={() => navigate('/carrito')} >
                <img src="" alt="img"/>
                <div>
                    <p>Carrito</p>
                    <p>s/.1000</p>
                </div>
            </button>
            <button id="usuarioButton" >
                <img src="" alt="img"/>
                <div>
                    <p>Usuario</p>
                    <p>Cuenta</p>
                </div>
            </button>
        </header>   
    </>
    )
}

export default Header