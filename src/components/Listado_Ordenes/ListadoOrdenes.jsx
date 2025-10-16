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
    if (textoBusqueda === '') return setOrdenes(ordenesDefault);
    const id = textoBusqueda;
    setOrdenes(ordenesDefault.filter(o => o.id === id));
  };

  return (
    <main className='mainOrdersAdmin' >

        <section className="BuscadorO">
            <div>
              <h2>Tus órdenes</h2>
            <input 
                id="bOrden" 
                type="text" 
                placeholder="Buscar una órden"
                value={textoBusqueda}
                onChange={(e) => setTextoBusqueda(e.target.value)}
                >
            </input>
            <button className='buscarO' onClick={handleBuscar}>Buscar</button>
            </div>
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
                <td class={estadoClase(o.estado)}> <b>{o.estado == true ? 'Activo' : 'Inactivo'}</b></td>
                <Botones />
              </tr>
            ))}
          </tbody>
        </table>
      
    </main>
  );
};


export default ListaO
