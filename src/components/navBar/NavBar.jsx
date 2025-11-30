import './NavBar.css'
import { Navigate, useNavigate } from 'react-router-dom';

const NavBar =()=>{
    const navigate = useNavigate();
    return(
        <>
        <section id="navBarSection">
            <nav>
                <ul>
                    <li>
                        <button className='boton_NavBar' onClick={() => navigate('/catalogo')}>
                        <img id="imgCat" src='/itemsAssets/list.png' alt='cat'/>
                        Categoría
                        </button>
                    </li>
                    <li> <button class='boton_NavBar' onClick={() => navigate('/')}>Productos</button></li>
                    <li> <button class='boton_NavBar' onClick={() => navigate('/')}>Nosotros</button></li>
                </ul>
            </nav>
            <div id="ofertas">
                <button class='boton_NavBar' onClick={() => navigate('/')}>OFERTAS 👋</button>
                 
            </div>
        </section>
        
        </>


    )
}

export default NavBar