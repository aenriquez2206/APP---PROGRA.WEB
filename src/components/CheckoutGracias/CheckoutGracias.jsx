import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./CheckoutGracias.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { Navigate, useNavigate } from 'react-router-dom';
import {useState} from 'react';

function CheckoutGracias() {
    const navigate = useNavigate();
    

    return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <h1>Orden completada 😃</h1>
        <p>¡Gracias por tu compra!</p>
        <div>
            <h3 class='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
            <div id='Resumen_final'>
            
            </div>

            <div id='derecha'>
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
            <div id='envio'>
                <h1>Dirección de envío</h1>
                <p>HOLAAAAA</p>
            </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default CheckoutGracias
