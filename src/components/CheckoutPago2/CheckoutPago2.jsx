import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutPago2.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../PagCarrito/CartContext';
import ordenesApi from '../../api/ordenesApi';

function CheckoutPago2() {
  const navigate = useNavigate();
  const location = useLocation();
  const { nombre, apellido, ciudad, departamento, direccion, codigoP, telefono } = location.state || {};
  const { cartItems, getTotalPrice, getTotalQuantity, clearCart } = useCart();

  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [CVV, setCVV] = useState("");

  const n_productos = getTotalQuantity();
  const incoming = location.state?.seleccionados;
  const itemsToCheckout = Array.isArray(incoming) && incoming.length > 0
    ? incoming
    : cartItems.filter(i => i && i.id).map(i => ({ ...i, cantidad: i.cantidad || 1 }));

  const precio_productos = itemsToCheckout.reduce((acc, it) => acc + ((it.precio || 0) * (it.cantidad || 1)), 0);
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
      const usuario = JSON.parse(localStorage.getItem("usuario"));

      // ✅ Enviar solo los items seleccionados (o los del contexto si no hay seleccionados)
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
        NroTarjeta: tarjeta,
        TipoTarjeta: "Tarjeta",
        estado: true
      };

      const nuevaOrden = await ordenesApi.createWithItems(payloadOrden, cartItemsPayload);

      // Limpiar carrito
      clearCart();

      // Redirigir a CheckoutGracias
      navigate("/carrito/compraexitosa", {
        state: {
          nombre,
          apellido,
          ciudad,
          departamento,
          direccion,
          codigoP,
          telefono,
          metodoPago: "Tarjeta",
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
      <main className="main_carrito">
        <h1><u>Checkout</u></h1>

        <div id="PagosResumen">
          <div id="Tarjeta_datos">
            <div className="imagen_Tarjeta">
              <img id="Tarjeta" src="/itemsAssets/TarjetaEjemplo.jpg" alt="Tarjeta" />
            </div>
            <div className="div11">
              <h4>Número de la tarjeta</h4>
              <input type="text" className="texto_largo" value={tarjeta} onChange={FormatearTarjeta} maxLength="19" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div className="div11">
              <h4>Nombre</h4>
              <input type="text" className="texto_largo" placeholder="Nombre del titular" />
            </div>
            <div className="div12">
              <div>
                <h4>Fecha de expiración</h4>
                <input type="text" className="texto_corto" value={fecha} onChange={FormatearFecha} maxLength="5" placeholder="12/25" />
              </div>
              <div>
                <h4>CVV</h4>
                <input type="text" className="texto_corto" value={CVV} onChange={FormatearCVV} maxLength="3" placeholder="123" />
              </div>
            </div>
            <div className="imagen_Tarjeta">
              <button id="boton3" onClick={handlePagoTarjeta}>Pagar</button>
            </div>
          </div>

          <div className="resumen_info_sin">
            <div className="contenido"><p>Productos ({n_productos})</p><p className="precios">S/. {precio_productos.toFixed(2)}</p></div>
            <div className="contenido"><p>Delivery</p><p className="precios">{delivery}</p></div>
            <div className="contenido"><p>Descuentos</p><p className="precios_desc">-S/. {descuentos.toFixed(2)}</p></div>
            <hr />
            <div className="contenido"><p><b>Total</b></p><p className="precios">S/. {total.toFixed(2)}</p></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CheckoutPago2;