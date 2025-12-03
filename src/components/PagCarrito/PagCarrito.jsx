import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import "./PagCarrito.css";
import { useNavigate } from 'react-router-dom';
import { useCart } from "./CartContext";
import { useEffect } from 'react';
import carritoApi from "../../api/carritoApi";

function PagCarrito() {
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
    setCartItems
  } = useCart();

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Cargar carrito al iniciar
  useEffect(() => {
    const cargarCarrito = async () => {
      if (!usuario?.id) return;

      let carrito = await carritoApi.getCarritoByUser(usuario.id);

      if (!carrito || !carrito.id) {
        carrito = await carritoApi.createCarrito(usuario.id);
      }
    };

    cargarCarrito();
  }, []);

  // -------------------------------
  // Variables calculadas del carrito
  // -------------------------------
  const n_productos = getTotalQuantity();
  const precio_productos = getTotalPrice();
  const delivery = n_productos > 0 ? 10 : 0;
  const descuentos = 0;
  const total = precio_productos + delivery - descuentos;

  return (
    <>
      <Header />
      <NavBar />

      <main className='mainCarrito'>
        <div className='carrito_headers'>
          <h1>Carro</h1>
          <p id='cantidad'>({n_productos} productos)</p>
          <h3 className='resumen'>Resumen de la compra</h3>
        </div>

        <div className='compras'>
          {/* LISTADO DE PRODUCTOS */}
          <div className='resumen_compra'>
            <h3>Productos en el carro de compras</h3>

            {cartItems.length === 0 ? (
              <p>Tu carrito está vacío</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="producto_item">
                  <input
                    type="checkbox"
                    className="producto_checkbox"
                    checked={selectedItems[item.id]}
                    onChange={() => toggleSelectItem(item.id)}
                  />
                  <img src={item.img} alt={item.nombre} className="producto_img" />
                  <div className="producto_detalles">
                    <p className="producto_nombre">{item.nombre}</p>
                    <p className="producto_cat">{item.categoria}</p>
                  </div>
                  <div className="producto_precio_cantidad">
                    <p className="producto_precio">S/. {item.precio.toFixed(2)}</p>
                    <div className="producto_cantidad_control">
                      <button className="boton_cantidad_control" onClick={() => removeFromCart(item.id)}>-</button>
                      <span className="cantidad_control">{item.cantidad}</span>
                      <button className="boton_cantidad_control" onClick={() => addToCart(item)}>+</button>
                    </div>
                    <button
                      className="carrito_btn_eliminar"
                      onClick={() => removeItemCompletely(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* GUARDADOS PARA DESPUÉS */}
            <div className="resumen_guardados">
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

          {/* RESUMEN DERECHA */}
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
              {/* CONTINUAR COMPRA */}
              <div className='botonesResumen'>
                <button id='boton1' onClick={() => {
                  const seleccionados = cartItems.filter(i => selectedItems[i.id]);
                  if (seleccionados.length === 0) {
                    alert("Seleccione al menos un producto");
                    return;
                  }
                  // No sobrescribimos cartItems, simplemente continuamos
                  navigate('/carrito/checkout', { state: { seleccionados } });
                }}>
                  Continuar compra
                </button>
              </div>

              {/* VACIAR */}
              <div className='botonesResumen'>
                <button id="botonBorrar" onClick={clearCart}>Vaciar carrito</button>
              </div>

              {/* GUARDAR */}
              <div className='botonesResumen'>
                <button id="botonGuardar" onClick={() => {
                  cartItems.forEach(item => {
                    if (selectedItems[item.id]) moveToSaved(item.id);
                  });
                }}>
                  Guardar seleccionados para después
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PagCarrito;
