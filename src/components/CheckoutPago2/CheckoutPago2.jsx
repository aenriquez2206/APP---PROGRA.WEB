import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutPago2.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';
import { useState } from 'react';
import ordenesApi from '../../api/ordenesApi';

function CheckoutPago2() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, getTotalPrice, getTotalQuantity, clearCart } = useCart();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono } = location.state || {};

  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [CVV, setCVV] = useState("");

  const n_productos = getTotalQuantity();
  const precio_productos = getTotalPrice();
  const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
  const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
  const descuentos = 0.1 * precio_productos;
  const total = precio_productos + p_delivery - descuentos;

  const FormatearTarjeta = (e) => setTarjeta(e.target.value.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || "");
  const FormatearFecha = (e) => setFecha(e.target.value.replace(/\D/g, "").match(/.{1,2}/g)?.join("/") || "");
  const FormatearCVV = (e) => setCVV(e.target.value.replace(/\D/g, ""));

  const handlePagoTarjeta = async () => {
    if (!tarjeta || !fecha || !CVV) {
      alert("Completa los datos de la tarjeta");
      return;
    }

    try {
      // Crear la orden
      const payload = {
        id_user: usuario.id,
        total,
        precio_productos,
        NroTarjeta: tarjeta,
        TipoTarjeta: "VISA/MC", // o podrías detectar según tarjeta
        items: cartItems.map(p => ({ id_producto: p.id, cantidad: p.cantidad }))
      };

      const respuesta = await ordenesApi.create(payload);

      // Vaciar carrito
      clearCart();

      // Navegar a página de gracias
      navigate('/checkout/compraexitosa', { state: { metodoPago: 'Tarjeta', orden: respuesta } });
    } catch (error) {
      console.error("Error creando orden:", error);
      alert("Ocurrió un error al generar la orden.");
    }
  };

  return (
    <>
      <Header/>
      <NavBar/>
      <main className='main_carrito'>
        <h1><u>Checkout</u></h1>
        <div className='checkout_headers'>
          <h3>Método de pago</h3>
          <h3 className='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
          <div id='Tarjeta_datos'>
            <div className="imagen_Tarjeta"><img id='Tarjeta' src="/itemsAssets/TarjetaEjemplo.jpg" alt="Tarjeta"/></div>
            <div className='div11'>
              <h4>Número de la tarjeta</h4>
              <input type="text" className='texto_largo' value={tarjeta} onChange={FormatearTarjeta} maxLength="19" placeholder="XXXX XXXX XXXX XXXX"/>
            </div>
            <div className='div11'><h4>Nombre</h4><input type="text" className='texto_largo' placeholder="Nombre del titular"/></div>
            <div className='div12'>
              <div><h4>Fecha de expiración</h4><input type="text" className='texto_corto' value={fecha} onChange={FormatearFecha} maxLength="5" placeholder="12/25"/></div>
              <div><h4>CVV</h4><input type="text" className='texto_corto' value={CVV} onChange={FormatearCVV} maxLength="3" placeholder="123"/></div>
            </div>
            <div className="imagen_Tarjeta">
              <button id='boton3' onClick={handlePagoTarjeta}>Pagar</button>
            </div>
          </div>

          <div className='resumen_info_sin'>
            <div className='contenido'><p>Productos ({n_productos})</p><p className='precios'>S/. {precio_productos.toFixed(2)}</p></div>
            <div className='contenido'><p>Delivery</p><p className='precios'>{delivery}</p></div>
            <div className='contenido'><p>Descuentos</p><p className='precios_desc'>-S/. {descuentos.toFixed(2)}</p></div>
            <hr/>
            <div className='contenido'><p><b>Total</b></p><p className='precios'>S/. {total.toFixed(2)}</p></div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CheckoutPago2;
