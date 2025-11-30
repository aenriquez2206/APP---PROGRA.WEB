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
    <main className="maindetalleorden">
      <h2>Detalles de Órden</h2>

      <div className="Principal">
          {Ordenes.filter((o) => o.id == Productos[0].id_orden)
          .map((o) =>  (
            <>
                <div className="infoO">
                  <div className="orden">
                    <h1>Orden:</h1>
                    <h1 className="N_Orden"> {o.id + " "}</h1>
                  </div>
                  <div className="estado">
                      <div>
                        <p><b>Estado:</b></p>
                      </div>
                      <div>
                        <p className={estadoClase(o.estadoO)}>{o.estadoO}  </p>
                      </div>
                    </div>
                    
                </div>
                <div className="Monto">
                  <p><b>Monto Total:</b> {o.total + " "}</p>
                </div>
            </>
              ))}

          <h3>Productos Ordenados</h3>

          <table className="tabla_DO">
            <thead>
              <th></th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Cantidad</th>
              <th>Total</th>
            </thead>
            <tbody>

              {Productos.filter((p) => p.id_orden == Ordenes[0].id) 
                .map((p, i) => (
                  <tr key={i}>
                    <td><img src={p.foto} alt="foto_juegos"/></td>
                    <td className="Id_Producto"><b>{p.id}</b></td>
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
