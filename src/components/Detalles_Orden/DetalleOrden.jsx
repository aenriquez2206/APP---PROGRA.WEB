import './DetalleOrden.css'
import {estadoClase} from './camcolor'

const Usuarios = [{orden:"#1234", estado:"Entregado", MontoTotal:"S/.400.00"}
];

const producto = [{foto:"./src/fotos/prod1", id:"#234", nombre:"Mario Kart", Categoria:"Videojuegos", Cantidad:"10", Total:"S/.19.00"}
];

const Boton = () => {
  return (
      <td>
        <button>Ver Detalle</button>
      </td>
  );
};

const DOrden = ({Ordenes, Productos}) => {
  return (
    <main>
      <h2>Detalles de Órden</h2>

      <div class="Principal">
          {Ordenes.filter((o) => o.id == Productos[0].id_orden)
          .map((o) =>  (
            <>
                <div class="infoO">
                  <div class="orden">
                    <h1>Orden:</h1>
                    <h1 class="N_Orden"> {o.id + " "}</h1>
                  </div>
                  <div class="estado">
                      <div>
                        <p><b>Estado:</b></p>
                      </div>
                      <div>
                        <p class={estadoClase(o.estadoO)}>{o.estadoO}  </p>
                      </div>
                    </div>
                    
                </div>
                <div class="Monto">
                  <p><b>Monto Total:</b> {o.total + " "}</p>
                </div>
            </>
              ))}

          <h3>Productos Ordenados</h3>

          <table>
            <thead>
              <th></th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Cantidad</th>
              <th>Total</th>
            </thead>
            <tbody>

              {Productos.filter((p) => p.id_orden == Ordenes[0].id) //Argegar contador
                .map((p, i) => (
                  <tr key={i}>
                    <td><img src={p.foto} alt="foto_juegos"/></td>
                    <td class="Id_Producto"><b>{p.id}</b></td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>{p.cantidad}</td>
                    <td>{p.total}</td>

                    <Boton />
                  </tr>
                ))}


            </tbody>
          </table>
      </div>  
      
    </main>
  );
};


export default DOrden
