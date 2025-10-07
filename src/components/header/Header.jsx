import './header.css'
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
            <div id="searchSection">
                <input id="search" type="text" placeholder="Buscar un producto"></input>
                <img  src="" alt="img"/>
            </div>
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