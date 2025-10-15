import { useState } from 'react';
import './ListaUsuarios.css';
import { estadoClase } from './camcolor';
import usuariosApi from '../../api/usuariosApi';
const ListaU = () => {
  
 const usuariosDefault = usuariosApi.get();
  const [usuarios, setUsuarios] = useState(usuariosDefault);

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const usuariosFiltrados = Usuarios.filter((item) =>
      item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setUsuarios(usuariosFiltrados);
  };

  const cambiarEstado = (index) => {
    const nuevaLista = usuariosDefault;
    nuevaLista[index].estado =
      nuevaLista[index].estado === 'Activo' ? 'Inactivo' : 'Activo';
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

      <table className='userTableView'>
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
                <img className="imagenTabla"src={e.img} alt="foto" /> {e.nombre}
              </td>
              <td>{e.fechaRegistro}</td>
              <td className={estadoClase(e.estado)}><b>{e.estado}</b></td>
              <td>
                <button onClick={() => cambiarEstado(i)}>
                  {e.estado === 'Activo' ? 'Desactivar' : 'Activar'}
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