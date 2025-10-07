import './NavBar.css'

const NavBar =()=>{
    return(
        <>
        <section id="navBarSection">
            <nav>
                <ul>
                    <li>
                        <img id="imgCat" src='' alt='cat'/>
                        <p>categoria</p>
                    </li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                </ul>
            </nav>
            <div id="ofertas">
                <p>OFERTAS</p>
                 <img id="imgOfertas" src='' alt='ofer'/>
            </div>
        </section>
        
        </>


    )
}

export default NavBar