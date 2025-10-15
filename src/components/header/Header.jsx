import './header.css'
import Searcher from '../Searcher/Searcher'

const Header = ()=>{
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
            <button id="comprasButton" >
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