import { useState } from 'react';
import './ListaUsuarios.css';
import { estadoClase } from './camcolor';

const ListaU = ({ Usuarios }) => {
  
  const [usuarios, setUsuarios] = useState([...Usuarios]);

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const usuariosFiltrados = Usuarios.filter((item) =>
      item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setUsuarios(usuariosFiltrados);
  };

  const cambiarEstado = (index) => {
    const nuevaLista = [...usuarios];
    nuevaLista[index].estadoC =
      nuevaLista[index].estadoC === 'Activo' ? 'Inactivo' : 'Activo';
    setUsuarios(nuevaLista);
  };

  return (
    <main>
      <h1>Listado de usuarios</h1>

      <section className="BuscadorU">
        <div className="Busuario">
          <input
            id="bUsuario"
            type="text"
            placeholder="Buscar un usuario"
            value={textoBusqueda}
            onChange={(e) => setTextoBusqueda(e.target.value)}
          />
        </div>
        <button onClick={handleBuscar}>Buscar</button>
      </section>

      <br />

      <table>
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Fecha de registro</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((e, i) => (
            <tr key={i}>
              <td>
                <img src={e.foto} alt="foto" /> {e.nombre}
              </td>
              <td>{e.fecha}</td>
              <td className={estadoClase(e.estadoC)}><b>{e.estadoC}</b></td>
              <td>
                <button onClick={() => cambiarEstado(i)}>
                  {e.estadoC === 'Activo' ? 'Desactivar' : 'Activar'}
                </button>
                <button>Ver detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ListaU;