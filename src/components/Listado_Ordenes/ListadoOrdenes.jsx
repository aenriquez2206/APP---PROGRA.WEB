import './ListadoOrdenes.css'
<<<<<<< HEAD
import {estadoClase} from './camcolor'
import { useState } from 'react';

=======
import estadoClase from './camcolor'
import { useState } from 'react';
import pedidosApi from '../../api/ordenesApi';
>>>>>>> ariel
const Botones = () => {
  return (
      <td>
        <button>Ver detalle</button>
      </td>
  );
};

<<<<<<< HEAD
const ListaO = ({Ordenes, Usuarios}) => {
  const [ordenes, setOrdenes] = useState([...Ordenes]);
=======
const ListaO = () => {

  const ordenesDefault = pedidosApi.get();
  const [ordenes, setOrdenes] = useState(ordenesDefault);
>>>>>>> ariel

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
<<<<<<< HEAD
    const ordenesFiltrados = Ordenes.filter((item) =>
=======
    const ordenesFiltrados = ordenesDefault .filter((item) =>
>>>>>>> ariel
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
<<<<<<< HEAD
            <button onClick={handleBuscar}>Buscar</button>
=======
            <button onClick={()=>handleBuscar()}>Buscar</button>
>>>>>>> ariel
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
<<<<<<< HEAD
                <td>{Usuarios.map((u) => (u.nombre))[i]}</td>
                <td>{o.fechaO}</td>
                <td>{o.total}</td>
                <td class={estadoClase(o.estadoO)}> <b>{o.estadoO}</b></td>
=======
                <td>{o.usuario}</td>
                <td>{o.fechaOrden}</td>
                <td>{o.total}</td>
                <td class={estadoClase(o.estado)}> <b>{o.estado}</b></td>
>>>>>>> ariel
                <Botones />
              </tr>
            ))}
          </tbody>
        </table>
      
    </main>
  );
};


export default ListaO
