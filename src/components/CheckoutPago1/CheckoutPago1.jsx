import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import "./CheckoutPago1.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';
import { useState } from 'react';

function CheckoutPago1() {
    const navigate = useNavigate();
    const location = useLocation();
    const {
      nombre,
      apellido,
      ciudad,
      departamento,
      direccion,
      codigoP,
      telefono
    } = location.state || {};
    const {
        getTotalPrice,
        getTotalQuantity,
    } = useCart();
    const n_productos = getTotalQuantity();
    const precio_productos = getTotalPrice();
    const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
    const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
    const descuentos = 0.1*precio_productos;
    const total = precio_productos + p_delivery - descuentos;
    
    return (
    <>
      <Header/>
      <NavBar/>
      <main class='main_carrito'>
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
               <img id='QR' src="/itemsAssets/EjemploQR.png" alt="QR"/>
                 
            </div>
            <div id="boton_QR">
               <button id='boton2' onClick={() => navigate('/carrito/compraexitosa', {
                  state: {
                    nombre,
                    apellido,
                    ciudad,
                    departamento,
                    direccion,
                    codigoP,
                    telefono
                  }})}>Ya realicé el pago</button>
                 
            </div>
            </div>
            <div class='resumen_info_sin'>
          <div class='contenido'>
            <p>Productos ({n_productos})</p>
            <p class='precios'>S/. {precio_productos.toFixed(2)}</p>
          </div>
          <div class='contenido'>
            <p>Delivery</p>
            <p class='precios'>{delivery}</p>
          </div>
          <div class='contenido'>
            <p>Descuentos</p>
            <p class='precios_desc'>-S/. {descuentos.toFixed(2)}</p>
          </div>
          <hr/>
          <div class='contenido'>
            <p><b>Total</b></p>
            <p class='precios'>S/. {total.toFixed(2)}</p>
          </div>
          
        </div>

        </div>

      </main>
    </>
  )
}

export default CheckoutPago1
