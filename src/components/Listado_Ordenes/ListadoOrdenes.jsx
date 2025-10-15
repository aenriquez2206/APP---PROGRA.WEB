import './ListadoOrdenes.css'
import estadoClase from './camcolor'
import { useState } from 'react';
import pedidosApi from '../../api/ordenesApi';
const Botones = () => {
  return (
      <td>
        <button>Ver detalle</button>
      </td>
  );
};

const ListaO = () => {

  const ordenesDefault = pedidosApi.get();
  const [ordenes, setOrdenes] = useState(ordenesDefault);

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const ordenesFiltrados = ordenesDefault .filter((item) =>
      item.id.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setOrdenes(ordenesFiltrados);
  };


  return (
    <main className='mainOrdersAdmin' > 
      <h1>Listado de órdenes</h1>

        <section class="BuscadorU">
            <div class="Busuario">
            <input 
                id="bUsuario" 
                type="text" 
                placeholder="Buscar una orden"
                value={textoBusqueda}
                onChange={(e) => setTextoBusqueda(e.target.value)}
                >
            </input>
            </div>
            <button onClick={()=>handleBuscar()}>Buscar</button>
        </section>
        <br />

        <table className="tableOrdersAdmin">
          <thead>
            <tr>
              <th>#ORDEN</th>
              <th>Usuario</th>
              <th>Fecha de órden</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {ordenes.map((o, i) => (
              <tr key={i}>
                <td className="Id_Orden"><b><u>{o.id}</u></b></td>
                <td>{o.usuario}</td>
                <td>{o.fechaOrden}</td>
                <td>{o.total}</td>
                <td class={estadoClase(o.estado)}> <b>{o.estado}</b></td>
                <Botones />
              </tr>
            ))}
          </tbody>
        </table>
      
    </main>
  );
};


export default ListaO
