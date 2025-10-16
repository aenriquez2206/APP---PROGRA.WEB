import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ListaUsuarios.css';
import { estadoClase } from './camcolor';
import usuariosApi from '../../api/usuariosApi';

const ListaU = () => {

  const navigate = useNavigate();
  const verDetalleUsuario = (id) => {
    navigate(`/admin/detalle-usuario/`);
  };
  
 const usuariosDefault = usuariosApi.get();
  const [usuarios, setUsuarios] = useState(usuariosDefault);

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const usuariosFiltrados = usuarios.filter((item) =>
      item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setUsuarios(usuariosFiltrados);
  };

  const cambiarEstado = (id, estadoActual) => {
      const nuevoEstado = !estadoActual; 
      usuariosApi.actualizarEstado(id, nuevoEstado); 
      const nuevosUsuarios = usuarios.map(u =>
        u.id === id ? { ...u, estado: nuevoEstado } : u
      );

      setUsuarios(nuevosUsuarios);
    };

  return (
    <main className="mainListaUsuarios">
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
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>
                <img className="imagenTabla"src={u.img} alt="foto" /> {u.nombre}
              </td>
              <td>{u.fechaRegistro}</td>
              <td className={estadoClase(u.estado)}><b>{u.estado == true ? 'Activo' : 'Inactivo'}</b></td>
              <td>
                <button onClick={() => cambiarEstado(u.id, u.estado)}>
                  {u.estado == true ? 'Desactivar' : 'Activar'}
                </button>
                <button onClick={() => verDetalleUsuario()}>Ver detalles</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ListaU;