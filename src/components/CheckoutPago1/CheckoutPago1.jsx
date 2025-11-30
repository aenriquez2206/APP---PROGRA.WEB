import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutPago1.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';
import ordenApi from '../../api/ordenesApi';

function CheckoutPago1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono } = location.state || {};
  const { cartItems, getTotalPrice, getTotalQuantity } = useCart(); // <--- NO clearCart

  const n_productos = getTotalQuantity();
  const precio_productos = getTotalPrice();
  const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
  const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
  const descuentos = 0.1 * precio_productos;
  const total = precio_productos + p_delivery - descuentos;

  const handlePagoQR = async () => {
    try {
      const ordenCreada = await ordenApi.create({
        usuarioId: JSON.parse(localStorage.getItem("usuario")).id,
        items: cartItems,
        direccion: { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono },
        total,
        metodoPago: 'QR'
      });

      // Pasamos los items a CheckoutGracias para mostrar el resumen
      navigate('/carrito/compraexitosa', { state: { 
        nombre, apellido, ciudad, departamento, direccion, codigoP, telefono,
        items: cartItems,
        total
      }});
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al crear la orden.");
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
          <div id="Escanear">
            <div id="subtitulo_QR"><h1>Escanear QR</h1></div>
            <div id="imagen_QR">
              <img id='QR' src="/itemsAssets/EjemploQR.png" alt="QR"/>
            </div>
            <div id="boton_QR">
              <button id='boton2' onClick={handlePagoQR}>Ya realicé el pago</button>
            </div>
          </div>

          <div className='resumen_info_sin'>
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
          </div>
        </div>
      </main>
    </>
  )
}

export default CheckoutPago1;
