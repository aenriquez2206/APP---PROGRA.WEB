import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutPago.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../PagCarrito/CartContext';

function CheckoutPago() {
  const location = useLocation();
  const navigate = useNavigate();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState('');

  const {
    nombre,
    apellido,
    ciudad,
    departamento,
    direccion,
    codigoP,
    telefono
  } = location.state || {};

  const handleSeleccion = (e) => {
    setMetodoSeleccionado(e.target.value);
  };

  const handleClick = () => {
    if (!metodoSeleccionado) {
      alert("Selecciona un método de pago primero");
      return;
    }

    const userData = { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono };

    if (metodoSeleccionado === "pagoQR") {
      navigate("/carrito/checkout/pago/qr", { state: userData }); 
    } else if (metodoSeleccionado === "pagoTarjeta") {
      navigate("/carrito/checkout/pago/tarjeta", { state: userData });
    }
  };

  const { getTotalPrice, getTotalQuantity } = useCart();
  const n_productos = getTotalQuantity();
  const precio_productos = getTotalPrice();
  const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
  const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
  const descuentos = 0.1 * precio_productos;
  const total = precio_productos + p_delivery - descuentos;

  return (
    <>
      <Header />
      <NavBar />
      <main className='main_carrito'>
        <h1><u>Checkout</u></h1>
        <div className='checkout_headers'>
          <h3>Método de pago</h3>
          <h3 className='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div id='PagosResumen'>
          <div id="TiposPagos">
            <label className="opcion">
              <input className="circuloSeleccion" type="radio" name="metodo" value="pagoQR" onChange={handleSeleccion}/>
              <span>Generar QR</span>
              <img id='QRscan' src="/itemsAssets/QRscan.jpg" alt="QR"/>
            </label>

            <label className="opcion">
              <input className="circuloSeleccion" type="radio" name="metodo" value="pagoTarjeta" onChange={handleSeleccion}/>
              <img id='MetodosPago' src="/itemsAssets/MetodosPago.jpg" alt="Tarjeta" />
            </label>
          </div>

          <div className='resumen_info'>
            <div className='contenido'>
              <p>Productos ({n_productos})</p>
              <p className='precios'>S/. {precio_productos.toFixed(2)}</p>
            </div>
            <div className='contenido'>
              <p>Delivery</p>
              <p className='precios'>{delivery}</p>
            </div>
            <div className='contenido'>
              <p>Descuentos</p>
              <p className='precios_desc'>-S/. {descuentos.toFixed(2)}</p>
            </div>
            <hr/>
            <div className='contenido'>
              <p><b>Total</b></p>
              <p className='precios'>S/. {total.toFixed(2)}</p>
            </div>
            <div className="BotonesR">
              <button id='boton1' onClick={handleClick}>Confirmar método de pago</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CheckoutPago;
