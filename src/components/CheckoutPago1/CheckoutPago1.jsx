import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutPago1.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';
import ordenesApi from '../../api/ordenesApi';

function CheckoutPago1() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, getTotalPrice, getTotalQuantity, clearCart } = useCart();
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  const { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono } = location.state || {};

  // Elegir items para checkout: preferir los seleccionados enviados desde PagCheckout
  const incoming = location.state?.seleccionados;
  const itemsToCheckout = Array.isArray(incoming) && incoming.length > 0
    ? incoming
    : cartItems.filter(i => i && i.id).map(i => ({ ...i, cantidad: i.cantidad || 1 }));

  const n_productos = itemsToCheckout.reduce((acc, it) => acc + (it.cantidad || 1), 0);
  const precio_productos = itemsToCheckout.reduce((acc, it) => acc + ((it.precio || 0) * (it.cantidad || 1)), 0);
  const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
  const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
  const descuentos = 0.1 * precio_productos;
  const total = precio_productos + p_delivery - descuentos;

  const handlePagoQR = async () => {
    try {
      // ✅ Enviar todos los datos de los items
      const cartItemsPayload = itemsToCheckout.map(item => ({
        id: item.id,
        cantidad: item.cantidad || 1,
        nombre: item.nombre,
        precio: item.precio,
        img: item.img,
        categoria: item.categoria
      }));

      const payloadOrden = {
        id_user: usuario.id,
        total,
        precio_productos,
        NroTarjeta: null,
        TipoTarjeta: 'QR',
        estado: true
      };

      const nuevaOrden = await ordenesApi.createWithItems(payloadOrden, cartItemsPayload);

      // Limpiar carrito
      clearCart();

      // Redirigir a CheckoutGracias
      navigate('/carrito/compraexitosa', {
        state: {
          nombre,
          apellido,
          ciudad,
          departamento,
          direccion,
          codigoP,
          telefono,
          metodoPago: 'QR',
          nuevaOrden,
          items: cartItemsPayload
        }
      });
    } catch (error) {
      console.error("Error al crear la orden:", error);
      alert("Ocurrió un error al crear la orden.");
    }
  };

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
          <div id="Escanear">
            <div id="subtitulo_QR"><h1>Escanear QR</h1></div>
            <div id="imagen_QR"><img id='QR' src="/itemsAssets/EjemploQR.png" alt="QR"/></div>
            <div id="boton_QR">
              <button id='boton2' onClick={handlePagoQR}>Ya realicé el pago</button>
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
  );
}

export default CheckoutPago1;