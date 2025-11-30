import { useLocation, Link } from 'react-router-dom';
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import './CheckoutGracias.css';

function CheckoutGracias() {
  const location = useLocation();
  const { metodoPago, orden } = location.state || {};

  if (!orden) {
    return (
      <div className="detalle-layout">
        <p>No se encontró información de la orden.</p>
        <Link to="/catalogo" className="volver-link">Volver al catálogo</Link>
      </div>
    )
  }

  return (
    <>
      <Header />
      <NavBar />
      <main className="main_carrito">
        <h1>✅ ¡Compra exitosa!</h1>
        <p>Método de pago: <b>{metodoPago}</b></p>
        <p>ID de la orden: <b>{orden.id}</b></p>
        <p>Total: <b>S/. {orden.total.toFixed(2)}</b></p>

        <h3>Productos:</h3>
        <ul>
          {orden.items?.map((item, idx) => (
            <li key={idx}>
              {item.nombre || item.id_producto} - Cantidad: {item.cantidad} - Precio: S/. {item.precio?.toFixed(2) || 'N/A'}
            </li>
          ))}
        </ul>

        <Link to="/catalogo" className="botonvolver">Volver al catálogo</Link>
      </main>
    </>
  )
}

export default CheckoutGracias;
