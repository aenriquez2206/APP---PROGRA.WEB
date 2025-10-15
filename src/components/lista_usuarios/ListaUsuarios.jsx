import { useState } from 'react';
import './ListaUsuarios.css';
import { estadoClase } from './camcolor';
import usuariosApi from '../../api/usuariosApi';
const ListaU = () => {
  
<<<<<<< HEAD
  usuariosDefault = usuariosApi.get();
=======
 const usuariosDefault = usuariosApi.get();
>>>>>>> ariel
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
<<<<<<< HEAD
    nuevaLista[index].estadoC =
      nuevaLista[index].estadoC === 'Activo' ? 'Inactivo' : 'Activo';
=======
    nuevaLista[index].estado =
      nuevaLista[index].estado === 'Activo' ? 'Inactivo' : 'Activo';
>>>>>>> ariel
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

<<<<<<< HEAD
      <table>
=======
      <table className='userTableView'>
>>>>>>> ariel
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
<<<<<<< HEAD
                <img src={e.foto} alt="foto" /> {e.nombre}
              </td>
              <td>{e.fecha}</td>
              <td className={estadoClase(e.estadoC)}><b>{e.estadoC}</b></td>
              <td>
                <button onClick={() => cambiarEstado(i)}>
                  {e.estadoC === 'Activo' ? 'Desactivar' : 'Activar'}
=======
                <img className="imagenTabla"src={e.img} alt="foto" /> {e.nombre}
              </td>
              <td>{e.fechaRegistro}</td>
              <td className={estadoClase(e.estado)}><b>{e.estado}</b></td>
              <td>
                <button onClick={() => cambiarEstado(i)}>
                  {e.estado === 'Activo' ? 'Desactivar' : 'Activar'}
>>>>>>> ariel
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