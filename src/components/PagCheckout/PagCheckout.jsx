import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import "./PagCheckout.css"
import PagCarrito from '../PagCarrito/PagCarrito'

function PagCheckout() {
  
  return (
    <>
      <Header/>
      <NavBar/>
      <main>
        <h1><u>Checkout</u></h1>
        <div class='checkout_headers'>
            <h3>Dirección de envío</h3>
            <h3><u>Resumen de la compra</u></h3>
        </div>

        <div class='div1'>
            <div class='div2'>
                <div class='div3'>
                    <div>
                        <h4>Nombre</h4>
                        <input type="text" class='texto1' id="nombre" placeholder="Nombre del usuario"/>
                    </div>
                    <div>
                        <h4>Apellido</h4>
                        <input type="text" class='texto1' id="apellido" placeholder="Apellido del usuario"/>
                    </div>
                </div>     
                <div class='div3'>   
                    <div>
                        <h4>Ciudad</h4>
                        <input type="text" class='texto1' id="ciudad" placeholder="Nombre de ciudad"/>
                    </div>
                    <div>
                        <h4>Departamento</h4>
                        <input type="text" class='texto1' id="departamento" placeholder="Nombre del departamento"/>
                    </div>
                </div>
                <div class='div3_dir'>
                        <h4>Dirección</h4>
                        <input type="text" id="direccion" placeholder="Av. Manuel Olguin 250..."/>
                </div>
                <div class='div3'>   
                    <div>
                        <h4>Código postal</h4>
                        <input type="text" class='texto1' id="codigo" placeholder="Código postal"/>
                    </div>
                    <div>
                        <h4>Teléfono de contacto</h4>
                        <input type="text" class='texto1' id="telefono" placeholder="+51"/>
                    </div>
                </div>
            </div>

            <div class='resumen_info'>
          <div class='contenido'>
            <p>Productos ({PagCarrito.n_productos})</p>
            <p class='precios'>S/. {PagCarrito.precio_productos}</p>
          </div>
          <div class='contenido'>
            <p>Delivery</p>
            <p class='precios'>{PagCarrito.delivery}</p>
          </div>
          <div class='contenido'>
            <p>Descuentos</p>
            <p class='precios'>-S/. {PagCarrito.descuentos}</p>
          </div>
          <hr/>
          <div class='contenido'>
            <p><b>Total</b></p>
            <p class='precios'>S/. {PagCarrito.total}</p>
          </div>
          <div id='botonCont'>
            <button id='boton1' onClick={() => navigate('/checkout')}>Seleccionar método de pago</button>
          </div>
        </div>

        </div>

      </main>
    </>
  )
}

export default PagCheckout
