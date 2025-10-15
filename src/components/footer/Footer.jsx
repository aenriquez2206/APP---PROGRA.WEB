import './footer.css'

const Footer = ()=>{
    return(
    <>
        <footer id="footerSection">
                <div>
                <p class="footerHeader">Siguenos</p>
                <img class='smLogos' src='src/components/images/facebook_logo.png' />
                <img class='smLogos' src='src/components/images/x_logo.png' />
                <img class='smLogos' src='src/components/images/instagram_logo.png'/>
                <img class='smLogos' src='src/components/images/youtube_logo.png'/>
                </div>
                <div>
                <p class="footerHeader">Nosotros</p>
                <p class="columnContent">Conócenos</p>
                <p class="columnContent">Responsabilidad social</p>
                <p class="columnContent">Nuestras tiendas</p>
                </div>
                <div>
                <p class="footerHeader">Atención al cliente</p>
                <p class="columnContent">Conócenos</p>
                <p class="columnContent">Responsabilidad social</p>
                <p class="columnContent">Nuestras tiendas</p>
                </div>
                <div>
                <p class="footerHeader">Políticas y condiciones</p>
                <p class="columnContent">Políticas de datos personales</p>
                <p class="columnContent">Condición de promociones</p>
                <p class="columnContent">Términos y condiciones</p>
                </div>
        </footer>
            
    </>
)
}

export default Footer