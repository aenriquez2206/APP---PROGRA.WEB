import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import "./PagCarrito.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from "./CartContext";
import { useEffect, useState } from 'react';
import Footer from '../footer/Footer';

function PagCarrito() {
    const navigate = useNavigate();
    const {cartItems, savedItems, addToCart, removeFromCart, removeItemCompletely, clearCart, moveToSaved, moveToCart, getTotalPrice, getTotalQuantity, selectedItems, toggleSelectItem,
          setCartItems,
    } = useCart();

    const n_productos = getTotalQuantity();
    const precio_productos = getTotalPrice();
    let p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
    let delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
    const descuentos = 0.1*precio_productos;
    const total = precio_productos + p_delivery - descuentos;


    return (
    <>
      <Header/>
      <NavBar/>
      <main class='mainCarrito'>
      <div class='carrito_headers'>
        <h1>Carro</h1>
        <p id='cantidad'>({n_productos} productos)</p>
        <h3 class='resumen'>Resumen de la compra</h3>
      </div>
      <div class='compras'>
      
        <div class='resumen_compra'>
          <h3>Productos en el carro de compras</h3>
              {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} class="producto_item">
            <input type="checkbox" class="producto_checkbox" checked={selectedItems[item.id]} onChange={() => toggleSelectItem(item.id)}/>
            <img src={item.img} alt={item.nombre} class="producto_img" />
            <div class="producto_detalles">
              <p class="producto_nombre">{item.nombre}</p>
              <p class="producto_cat">{item.categoria}</p>
             </div> 
            <div class="producto_precio_cantidad">
              <p class="producto_precio">S/. {item.precio.toFixed(2)}</p>
              <div class="producto_cantidad_control">
                <button class="boton_cantidad_control" onClick={() => removeFromCart(item.id)}>-</button>
                <span class="cantidad_control">{item.cantidad}</span>
                <button class="boton_cantidad_control" onClick={() => addToCart(item)}>+</button>
              </div>
              <button 
                class="carrito_btn_eliminar" 
                onClick={() => removeItemCompletely(item.id)}
              >🗑️</button>
        </div>
      </div>
    ))
  )}
          <div class="resumen_guardados">
            <h3>Guardados para después</h3>

                {savedItems.length === 0 ? (
                  <p className="mensaje_vacio">No hay productos guardados</p>
                ) : (
                  savedItems.map((item) => (
                    <div key={item.id} className="producto_item">
                      <img src={item.img} alt={item.nombre} className="producto_img" />
                      <div className="producto_detalles">
                        <p className="producto_nombre">{item.nombre}</p>
                        <p className="producto_cat">{item.categoria}</p>
                      </div>
                      <div className="producto_precio_cantidad">
                        <p className="producto_precio">S/. {item.precio.toFixed(2)}</p>
                        <button
                          className="boton_cantidad_control"
                          onClick={() => moveToCart(item.id)}
                        >
                          Volver al carrito
                        </button>
                      </div>
                    </div>
                  ))
                )}

          </div>
        
        </div>

        <div class='resumen_info'>
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
          <div class="BotonesR">
          <div class='botonesResumen'>
            <button id='boton1' onClick={() => {
              const haySeleccionados = cartItems.some(item => selectedItems[item.id]);
              if(!haySeleccionados){
                alert("Seleccione al menos un producto");
                return;
              }
              const seleccionados = cartItems.filter(item => selectedItems[item.id]);
              setCartItems(seleccionados);
              navigate('/carrito/checkout')
            }}>Continuar compra</button>
          </div>
          <div class='botonesResumen'>  
            <button id="botonBorrar" onClick={clearCart}>Vaciar carrito</button>
          </div>
          <div class='botonesResumen'>
            <button id="botonGuardar" onClick={() => {cartItems.forEach(item => {
                  if (selectedItems[item.id]) {
                    moveToSaved(item.id);
                  }
                });
              }}
            >
              Guardar seleccionados para después
            </button>
          </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}

export default PagCarrito
