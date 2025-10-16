import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import "./PagCheckout.css"
import PagCarrito from '../PagCarrito/PagCarrito'
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../PagCarrito/CartContext';
import { useState } from 'react';


function PagCheckout() {
    const navigate = useNavigate();
  
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [codigoP, setCodigoP] = useState('');
    const [telefono, setTelefono] = useState('');

    const {
        getTotalPrice,
        getTotalQuantity,
    } = useCart();
    const n_productos = getTotalQuantity();
    const precio_productos = getTotalPrice();
    const p_delivery = precio_productos > 100 ? 0 : precio_productos * 0.2;
    const delivery = precio_productos > 100 ? 'GRATIS' : `S/. ${p_delivery.toFixed(2)}`;
    const descuentos = 0.1*precio_productos;
    const total = precio_productos + p_delivery - descuentos;

    const handleSiguiente = () => {
      if (
        !nombre.trim() ||
        !apellido.trim() ||
        !ciudad.trim() ||
        !departamento.trim() ||
        !direccion.trim() ||
        !codigoP.trim() ||
        !telefono.trim()
      ) {
        alert('Completa todos los campos antes de continuar.');
        return;
      }

        navigate('/carrito/checkout/pago', {
        state: {
          nombre,
          apellido,
          ciudad,
          departamento,
          direccion,
          codigoP,
          telefono
        }
      });
    }
    
  return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <h1><u>Checkout</u></h1>
        <div class='checkout_headers'>
            <h3>Dirección de envío</h3>
            <h3 class='resumen'><u>Resumen de la compra</u></h3>
        </div>

        <div class='div1'>
            <div class='div2'>
                <div class='div3'>
                    <div>
                        <h4>Nombre</h4>
                        <input type="text" class='texto1' id="nombre" placeholder="Nombre del usuario" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    </div>
                    <div>
                        <h4>Apellido</h4>
                        <input type="text" class='texto1' id="apellido" placeholder="Apellido del usuario" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                    </div>
                </div>     
                <div class='div3'>   
                    <div>
                        <h4>Ciudad</h4>
                        <input type="text" class='texto1' id="ciudad" placeholder="Nombre de ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                    </div>
                    <div>
                        <h4>Departamento</h4>
                        <input type="text" class='texto1' id="departamento" placeholder="Nombre del departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)}/>
                    </div>
                </div>
                <div class='div3_dir'>
                        <h4>Dirección</h4>
                        <input type="text" id="direccion" placeholder="Av. Manuel Olguin 250..." value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                </div>
                <div class='div3'>   
                    <div>
                        <h4>Código postal</h4>
                        <input type="text" class='texto1' id="codigo" placeholder="Código postal" value={codigoP} onChange={(e) => setCodigoP(e.target.value)}/>
                    </div>
                    <div>
                        <h4>Teléfono de contacto</h4>
                        <input type="text" class='texto1' id="telefono" placeholder="+51" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div class='resumen_info2'>
          <div class='contenido'>
            <p>Productos ({n_productos})</p>
            <p class='precios'>S/. {precio_productos.toFixed(2)}</p>
          </div>
          <div class='contenido'>
            <p>Delivery</p>
            <p class='precios'>{delivery}</p>
          </div>
          <div class='contenido'>
            <p>Descuentos</p>
            <p class='precios_desc'>-S/. {descuentos.toFixed(2)}</p>
          </div>
          <hr/>
          <div class='contenido'>
            <p><b>Total</b></p>
            <p class='precios'>S/. {total.toFixed(2)}</p>
          </div>
          <div class='BotonesR'>
            <button id='boton2' onClick={handleSiguiente}>Seleccionar método de pago</button>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default PagCheckout
