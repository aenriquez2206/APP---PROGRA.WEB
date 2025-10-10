import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./PagCarrito.css";
import { Navigate, useNavigate } from 'react-router-dom';

function PagCarrito() {
  const navigate = useNavigate();

  var n_productos = 0;
  var precio_productos = 90;
  var p_delivery = 0;
  var descuentos = 0;
  var total = 0;
  var delivery;

  if(precio_productos>100){
    p_delivery = 0;
    delivery = 'GRATIS'
  }
  else{
    p_delivery = precio_productos*0.2;
    delivery = 'S/. ' + p_delivery
  }

  total = precio_productos + p_delivery - descuentos;

  return (
    <>
      <Header/>
      <NavBar/>
      <main>
      <div class='carrito_headers'>
        <h1>Carro</h1>
        <p id='cantidad'>({n_productos} productos)</p>
        <h3 class='resumen'>Resumen de la compra</h3>
      </div>
    <div class='compras'>
        <div class='resumen_compra'>
          <h1>productos</h1>
        </div>
        
        <div class='resumen_info'>
          <div class='contenido'>
            <p>Productos ({n_productos})</p>
            <p class='precios'>S/. {precio_productos}</p>
          </div>
          <div class='contenido'>
            <p>Delivery</p>
            <p class='precios'>{delivery}</p>
          </div>
          <div class='contenido'>
            <p>Descuentos</p>
            <p class='precios'>-S/. {descuentos}</p>
          </div>
          <hr/>
          <div class='contenido'>
            <p><b>Total</b></p>
            <p class='precios'>S/. {total}</p>
          </div>
          <div id='botonCont'>
            <button id='boton1' onClick={() => navigate('/PagCheckout')}>Continuar compra</button>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}

export default PagCarrito
