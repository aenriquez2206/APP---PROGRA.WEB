import './ListadoOrdenes.css'
import {estadoClase} from './camcolor'
import { useState } from 'react';

const Botones = () => {
  return (
      <td>
        <button>Ver detalle</button>
      </td>
  );
};

const ListaO = ({Ordenes, Usuarios}) => {
  const [ordenes, setOrdenes] = useState([...Ordenes]);

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const ordenesFiltrados = Ordenes.filter((item) =>
      item.id.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setOrdenes(ordenesFiltrados);
  };


  return (
    <main>
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
            <button onClick={handleBuscar}>Buscar</button>
        </section>
        <br />

        <table>
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
                <td class="Id_Orden"><b><u>{o.id}</u></b></td>
                <td>{Usuarios.map((u) => (u.nombre))[i]}</td>
                <td>{o.fechaO}</td>
                <td>{o.total}</td>
                <td class={estadoClase(o.estadoO)}> <b>{o.estadoO}</b></td>
                <Botones />
              </tr>
            ))}
          </tbody>
        </table>
      
    </main>
  );
};


export default ListaO
