import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import "./CheckoutPago.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { Navigate, useNavigate } from 'react-router-dom';
import {useState} from 'react';

function CheckoutPago() {
    const navigate = useNavigate();
    const [metodoSeleccionado, setMetodoSeleccionado] = useState('');

     const handleSeleccion = (e) => {
    setMetodoSeleccionado(e.target.value);
  };

  const handleClick = () => {
    if (!metodoSeleccionado) {
      alert("Selecciona un método de pago primero");
      return;
    }

    if (metodoSeleccionado === "pagoQR") navigate("/QR"); 
    else if (metodoSeleccionado === "pagoTarjeta") navigate("/Tarjeta");
  };

    return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <h1><u>Checkout</u></h1>
        <div class='checkout_headers'>
            <h3>Método de pago</h3>
            <h3 class='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
            <div id="TiposPagos">
            <label class="opcion">
                <input class="circuloSeleccion" type="radio" name="metodo" value="pagoQR" onChange={handleSeleccion}/>
                <span>Generar QR</span>
                <img id='QRscan' src="src/components/imagenes/QRscan.jpg" alt="QR"/>
                
            </label>

            <label class="opcion">
                <input class="circuloSeleccion" type="radio" name="metodo" value="pagoTarjeta" onChange={handleSeleccion}/>
                <img id='MetodosPago' src="src/components/imagenes/MetodosPago.jpg" alt="Tarjeta" />
                
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
            <button id='boton1' onClick={handleClick}>Confirmar método de pago</button>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default CheckoutPago
