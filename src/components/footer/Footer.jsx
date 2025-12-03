import './footer.css'

const Footer = ()=>{
    return(
    <>
        <footer id="footerSection">
                <div>
                <p className="footerHeader">Siguenos</p>
                <img className='smLogos' src='src/components/images/facebook_logo.png' />
                <img className='smLogos' src='src/components/images/x_logo.png' />
                <img className='smLogos' src='src/components/images/instagram_logo.png'/>
                <img className='smLogos' src='src/components/images/youtube_logo.png'/>
                </div>
                <div>
                <p className="footerHeader">Nosotros</p>
                <p className="columnContent">Conócenos</p>
                <p className="columnContent">Responsabilidad social</p>
                <p className="columnContent">Nuestras tiendas</p>
                </div>
                <div>
                <p className="footerHeader">Atención al cliente</p>
                <p className="columnContent">Conócenos</p>
                <p className="columnContent">Responsabilidad social</p>
                <p className="columnContent">Nuestras tiendas</p>
                </div>
                <div>
                <p className="footerHeader">Políticas y condiciones</p>
                <p className="columnContent">Políticas de datos personales</p>
                <p className="columnContent">Condición de promociones</p>
                <p className="columnContent">Términos y condiciones</p>
                </div>
        </footer>
            
    </>
)
}

export default Footer