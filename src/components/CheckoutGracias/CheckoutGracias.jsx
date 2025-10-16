import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import "./CheckoutGracias.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { Navigate, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';

function CheckoutGracias() {
    const navigate = useNavigate();
    
    const {
          cartItems,
          savedItems,
          addToCart,
          removeFromCart,
          removeItemCompletely,
          clearCart,
          moveToSaved,
          moveToCart,
          getTotalPrice,
          getTotalQuantity,
          selectedItems,
          toggleSelectItem,
    } = useCart();
  
    const n_productos = getTotalQuantity();
    const precio_productos = getTotalPrice();
    const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
    const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
    const descuentos = 0.1*precio_productos;
    const total = precio_productos + p_delivery - descuentos;

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

    return (
    <>
      <Header/>
      <NavBar/>
      <main class='main_carrito'>
        <h1>Orden completada 😃</h1>
        <p>¡Gracias por tu compra!</p>
        <div>
            <h3 class='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
            <div id='Resumen_final'>
                <div class='resumen_compra'>
          <h3>Productos en el carro de compras</h3>
              {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} class="producto_item">
            
            <img src={item.img} alt={item.nombre} class="producto_img" />
            <div class="producto_detalles">
              <p class="producto_nombre">{item.nombre}</p>
              <p class="producto_cat">{item.categoria}</p>
              
              
             </div> 
            <div class="producto_precio_cantidad">
              <p class="producto_precio">S/. {item.precio.toFixed(2)}</p>
              <div class="producto_cantidad_control">
                
                <span class="cantidad_control">{item.cantidad}</span>
                
              </div>
              
        </div>
      </div>
    ))
  )}
        </div>
            </div>

            <div id='derecha'>
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
            <div id='envio'>
                <div id='moto_img'>
                    <h1 class='text_caja'>Dirección de envío</h1>
                <img id='img_delivery' src="/itemsAssets/delivery.png" alt="delivery"/>
                </div>
                <p class='text_caja'>{direccion}</p>
                <p class='text_caja'>{ciudad} - {direccion}</p>
                <p class='text_caja'>Celular de contacto: {telefono}</p>
                <br/>
                <p class='text_caja'>Fecha de entrega estimada: <b>01/11/2025</b></p>
            <div id='Volver_div'>
          <button class="Volver" onClick={() => {clearCart(); navigate('/');}}>
            Regresar al menú principal
              </button>
        </div>
            </div>
        </div>

        </div>
       

      </main>
    </>
  )
}

export default CheckoutGracias
