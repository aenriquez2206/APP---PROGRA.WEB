import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./CheckoutPago1.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { Navigate, useNavigate } from 'react-router-dom';
import {useState} from 'react';

function CheckoutPago1() {
    const navigate = useNavigate();
    

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
            <div id='Escanear'>
            <div id="subtitulo_QR">
               <h1>Escanear QR</h1>
                 
            </div>
            <div id="imagen_QR">
               <img id='QR' src="src/components/imagenes/EjemploQR.png" alt="QR"/>
                 
            </div>
            <div id="boton_QR">
               <button id='boton2' onClick={() => navigate('/OrdenCompletada')}>Ya realicé el pago</button>
                 
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

export default CheckoutPago1
