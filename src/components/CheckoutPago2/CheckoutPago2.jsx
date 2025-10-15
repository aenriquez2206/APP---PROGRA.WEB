import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./CheckoutPago2.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { Navigate, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

function CheckoutPago2() {
    const navigate = useNavigate();

    const [tarjeta, setTarjeta] = useState("");
    const [fecha, setFecha] = useState("");
    const [CVV, setCVV] = useState("");

    const FormatearTarjeta = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // solo números
        value = value.match(/.{1,4}/g)?.join(" ") || ""; // bloques de 4
        setTarjeta(value);
    };

    const FormatearFecha = (e) => {
        let value = e.target.value.replace(/\D/g, ""); 
        value = value.match(/.{1,2}/g)?.join("/") || ""; 
        setFecha(value);
    };
    const FormatearCVV = (e) => {
        let value = e.target.value.replace(/\D/g, ""); 
        setCVV(value);
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
            <div id='Tarjeta_datos'>
            
            <div class="imagen_Tarjeta">
               <img id='Tarjeta' src="src/components/imagenes/TarjetaEjemplo.jpg" alt="Tarjeta"/>
                 
            </div>
            <div class='div11'>
                <h4>Número de la tarjeta</h4>
                <input type="text" class='texto_largo' id="n_tarjeta" value={tarjeta} onChange={FormatearTarjeta} maxlength="19" placeholder="XXXX XXXX XXXX XXXX"/>
            </div>
            <div class='div11'>
                <h4>Nombre</h4>
                <input type="text" class='texto_largo' id="nombre_tarjeta" placeholder="Nombre del titular"/>
            </div>
            <div class='div12'>
                <div>
                    <h4>Fecha de expiración</h4>
                    <input type="text" class='texto_corto' id="f_tarjeta" value={fecha} onChange={FormatearFecha} maxlength="5" placeholder="12/20"/>
                </div>
                <div>
                    <h4>CVV</h4>
                    <input type="text" class='texto_corto' id="CVV_tarjeta" value={CVV} onChange={FormatearCVV} maxlength="3" placeholder="123"/>
                </div>
            </div>



            <div class="imagen_Tarjeta">
               <button id='boton3' onClick={() => navigate('/OrdenCompletada')}>Pagar</button>
                 
            </div>
            </div>


            <div class='resumen_info_sin'>
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
          
        </div>

        </div>

      </main>
    </>
  )
}

export default CheckoutPago2
