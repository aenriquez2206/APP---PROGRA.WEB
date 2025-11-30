import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './ListaUsuarios.css';
import { estadoClase } from './camcolor';
import usuariosApi from '../../api/auth';
import UserRow from '../dashboardAdmin/userRow/UserRow'
const ListaU = () => {

  const navigate = useNavigate();
  const verDetalleUsuario = () => {
    navigate(`/admin/detalle-usuario/`);
  };
  const [usuarios, setUsuarios] = useState([]);

    const handleOnLoad =async()=>{
        const allUsers = await usuariosApi.findAll();
        setUsuarios(allUsers)
    }
    useEffect(()=>{
        handleOnLoad()
    },[])

  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = () => {
    const usuariosFiltrados = usuarios.filter((item) =>
      item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
    setUsuarios(usuariosFiltrados);
  };
  

  const cambiarEstado = async (user) => {
      const newestado = !user.estado
      user.estado = newestado
      await usuariosApi.update(user)
      const nuevosUsuarios = usuarios.map(u =>
        u.id === id ? { ...u, estado: nuevoEstado } : u
      );

      
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
          {usuarios.map((user) => (
            <UserRow user={user} fecha={true} OnClick={verDetalleUsuario}
                                        />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ListaU;