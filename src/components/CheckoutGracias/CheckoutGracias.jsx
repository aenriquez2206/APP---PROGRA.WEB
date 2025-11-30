import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import "./CheckoutGracias.css";
import { useNavigate, useLocation } from 'react-router-dom';

function CheckoutGracias() {
  const navigate = useNavigate();
  const location = useLocation();

  const { 
    nombre,
    apellido,
    ciudad,
    departamento,
    direccion,
    codigoP,
    telefono,
    metodoPago,
    nuevaOrden
  } = location.state || {};

  if (!nuevaOrden) {
    return (
      <div>
        <h2>Error: No se encontró la información de la orden</h2>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  const items = location.state.items || [];

  const precio_productos = items.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
  const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
  const descuentos = 0.1 * precio_productos;
  const total = precio_productos + p_delivery - descuentos;
  const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;

  return (
    <>
      <Header />
      <NavBar />
      <main className="main_carrito">
        <h1>Orden completada 😃</h1>
        <p>¡Gracias por tu compra!</p>

        <h3 className="resumen"><u>Resumen de la compra</u></h3>

        <div id="PagosResumen">
          <div id="Resumen_final">
            <div className="resumen_compra">
              <h3>Productos en la orden</h3>
              {items.length === 0 ? (
                <p>No hay productos en esta orden</p>
              ) : (
                items.map(item => (
                  <div key={item.id} className="producto_item">
                    <img src={item.img} alt={item.nombre} className="producto_img" />
                    <div className="producto_detalles">
                      <p className="producto_nombre">{item.nombre}</p>
                      <p className="producto_cat">{item.categoria}</p>
                    </div>
                    <div className="producto_precio_cantidad">
                      <p className="producto_precio">S/. {item.precio.toFixed(2)}</p>
                      <div className="producto_cantidad_control">
                        <span className="cantidad_control">{item.cantidad}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div id="derecha">
            <div className="resumen_info_sin">
              <div className="contenido">
                <p>Productos ({items.reduce((sum, i) => sum + i.cantidad, 0)})</p>
                <p className="precios">S/. {precio_productos.toFixed(2)}</p>
              </div>
              <div className="contenido">
                <p>Delivery</p>
                <p className="precios">{delivery}</p>
              </div>
              <div className="contenido">
                <p>Descuentos</p>
                <p className="precios_desc">-S/. {descuentos.toFixed(2)}</p>
              </div>
              <hr />
              <div className="contenido">
                <p><b>Total</b></p>
                <p className="precios">S/. {total.toFixed(2)}</p>
              </div>
            </div>

            <div id="envio">
              <div id="moto_img">
                <h1 className="text_caja">Dirección de envío</h1>
                <img id="img_delivery" src="/itemsAssets/delivery.png" alt="delivery" />
              </div>
              <p className="text_caja">{direccion}</p>
              <p className="text_caja">{ciudad} - {departamento}</p>
              <p className="text_caja">Celular de contacto: {telefono}</p>
              <br />
              <p className="text_caja">Fecha de entrega estimada: <b>01/11/2025</b></p>

              <div id="Volver_div">
                <button className="Volver" onClick={() => navigate('/')}>
                  Regresar al menú principal
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CheckoutGracias;