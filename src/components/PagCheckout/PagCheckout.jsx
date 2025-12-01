import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./PagCheckout.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from "../PagCarrito/CartContext.jsx";
import { useState, useEffect } from 'react';

function PagCheckout() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    cartItems,
    getTotalPrice,
    getTotalQuantity,
    selectedItems
  } = useCart();

  // Preferimos los seleccionados enviados vía navigate; si no, usamos selectedItems del contexto
  const incoming = location.state?.seleccionados;
  const itemsToCheckout = Array.isArray(incoming) && incoming.length > 0
    ? incoming
    : cartItems.filter(i => selectedItems[i.id]);

  const [shipping, setShipping] = useState({
    nombre: '',
    apellido: '',
    ciudad: '',
    departamento: '',
    direccion: '',
    codigoP: '',
    telefono: ''
  });

  const n_productos = itemsToCheckout.reduce((acc, it) => acc + (it.cantidad || 1), 0);
  const precio_productos = itemsToCheckout.reduce((acc, it) => acc + ((it.precio || 0) * (it.cantidad || 1)), 0);
  const delivery = precio_productos > 100 ? 0 : 10;
  const descuentos = 0;
  const total = precio_productos + delivery - descuentos;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping(prev => ({ ...prev, [name]: value }));
  }

  const handleContinueToPayment = () => {
    // Validaciones simples
    if (itemsToCheckout.length === 0) {
      alert('No hay productos seleccionados para comprar');
      return;
    }
    if (!shipping.nombre || !shipping.direccion) {
      alert('Complete nombre y dirección');
      return;
    }

    navigate('/carrito/checkout/pago', { state: shipping });
  }

  return (
    <>
      <Header />
      <NavBar />

      <main className='mainCarrito'>
        <div className='carrito_headers'>
          <h1>Checkout</h1>
          <p id='cantidad'>({n_productos} productos)</p>
          <h3 className='resumen'>Resumen de la compra</h3>
        </div>

        <div className='compras'>
          <div className='resumen_compra'>
            <h3>Artículos seleccionados</h3>
            {itemsToCheckout.length === 0 ? (
              <p>No hay productos seleccionados</p>
            ) : (
              itemsToCheckout.map(item => (
                <div key={item.id} className="producto_item">
                  <img src={item.img} alt={item.nombre} className="producto_img" />
                  <div className="producto_detalles">
                    <p className="producto_nombre">{item.nombre}</p>
                    <p className="producto_cat">{item.categoria}</p>
                  </div>
                  <div className="producto_precio_cantidad">
                    <p className="producto_precio">S/. {(item.precio || 0).toFixed(2)}</p>
                    <div className="producto_cantidad_control">
                      <span className="cantidad_control">{item.cantidad || 1}</span>
                    </div>
                  </div>
                </div>
              ))
            )}

            <h3>Dirección de envío</h3>
            <div className="formCheckout">
              <input name="nombre" placeholder="Nombre" value={shipping.nombre} onChange={handleChange} />
              <input name="apellido" placeholder="Apellido" value={shipping.apellido} onChange={handleChange} />
              <input name="ciudad" placeholder="Ciudad" value={shipping.ciudad} onChange={handleChange} />
              <input name="departamento" placeholder="Departamento" value={shipping.departamento} onChange={handleChange} />
              <input name="direccion" placeholder="Dirección" value={shipping.direccion} onChange={handleChange} />
              <input name="codigoP" placeholder="Código postal" value={shipping.codigoP} onChange={handleChange} />
              <input name="telefono" placeholder="Teléfono" value={shipping.telefono} onChange={handleChange} />
            </div>
          </div>

          <div className='resumen_info'>
            <div className='contenido'>
              <p>Productos ({n_productos})</p>
              <p className='precios'>S/. {precio_productos.toFixed(2)}</p>
            </div>
            <div className='contenido'>
              <p>Delivery</p>
              <p className='precios'>S/. {delivery.toFixed(2)}</p>
            </div>
            <div className='contenido'>
              <p>Descuentos</p>
              <p className='precios_desc'>-S/. {descuentos.toFixed(2)}</p>
            </div>
            <hr />
            <div className='contenido'>
              <p><b>Total</b></p>
              <p className='precios'>S/. {total.toFixed(2)}</p>
            </div>

            <div className="BotonesR">
              <div className='botonesResumen'>
                <button id='boton1' onClick={handleContinueToPayment}>
                  Continuar a método de pago
                </button>
              </div>
              <div className='botonesResumen'>
                <button id="botonBorrar" onClick={() => navigate('/carrito')}>Volver al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PagCheckout;
