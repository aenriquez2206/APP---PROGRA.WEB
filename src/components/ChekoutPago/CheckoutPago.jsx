import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./CheckoutPago.css"
import PagCarrito from '../PagCarrito/PagCarrito'

function CheckoutPago() {
  
  return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <h1><u>Checkout</u></h1>
        <div class='checkout_headers'>
            <h3>Método de pago</h3>
            <h3><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
            <div id="TiposPagos">
            <label class="opcion">
                <input class="circuloSeleccion" type="radio" name="metodo" value="pagoQR"/>
                <span>Generar QR</span>
                <img id='QRscan' src="src/components/imagenes/QRscan.jpg" alt="QR" width="150"/>
                
            </label>

            <label class="opcion">
                <input class="circuloSeleccion" type="radio" name="metodo" value="pagoTarjeta"/>
                <img id='MetodosPago' src="src/components/imagenes/MetodosPago.jpg" alt="Tarjeta" width="150"/>
                
            </label>
            </div>


            <div class='resumen_info'>
          <div class='contenido'>
            <p>Productos ({PagCarrito.n_productos})</p>
            <p class='precios'>S/. {PagCarrito.precio_productos}</p>
          </div>
          <div class='contenido'>
            <p>Delivery</p>
            <p class='precios'>{PagCarrito.delivery}</p>
          </div>
          <div class='contenido'>
            <p>Descuentos</p>
            <p class='precios'>-S/. {PagCarrito.descuentos}</p>
          </div>
          <hr/>
          <div class='contenido'>
            <p><b>Total</b></p>
            <p class='precios'>S/. {PagCarrito.total}</p>
          </div>
          <div id='botonCont'>
            <button id='boton1' onClick={() => navigate('/checkout')}>Seleccionar método de pago</button>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default CheckoutPago
