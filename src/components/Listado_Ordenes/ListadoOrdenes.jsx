import './ListadoOrdenes.css'
import estadoClase from './camcolor'
import { useState, useEffect } from "react";
import pedidosApi from '../../api/ordenesApi';
import Searcher from '../Searcher/Searcher'
import { useNavigate, useLocation } from 'react-router-dom'

const Botones = ({ orden }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleVerDetalle = () => {
    const id = orden.id ?? orden.idp;
    // Si estamos dentro de una ruta de admin, navegar a la ruta admin,
    // de lo contrario usar la ruta pública para detalle de orden.
    const isAdminPath = location.pathname.includes('/admin');
    const target = isAdminPath ? `/admin/detalle-orden/${id}` : `/detalle-orden/${id}`;
    navigate(target, { state: { orden } });
  };

  return (
    <td>
      <button onClick={handleVerDetalle}>Ver detalle</button>
    </td>
  );
};

const ListaO = ({userId}) => {
  const [ordenes, setOrdenes] = useState([]);
  const [ordenesOriginales, setOrdenesOriginales] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  
  useEffect(() => {
    // Cargar todas las órdenes si no se provee userId (página admin),
    // o las órdenes del usuario si se proporciona userId.
    handleOnLoad();
  }, [userId]);

  const handleOnLoad = async () => {
    try {
      let rawordenes;
      if (userId) {
        rawordenes = await pedidosApi.findOne(userId);
      } else {
        rawordenes = await pedidosApi.findAll();
      }

      // Normalizar si viene envuelto en { data }
      const data = Array.isArray(rawordenes) ? rawordenes : (rawordenes?.data ?? rawordenes?.rows ?? []);
      setOrdenesOriginales(data);
      setOrdenes(data);
    } catch (error) {
      console.error("Error cargando órdenes:", error);
      setOrdenes([]);
      setOrdenesOriginales([]);
    }
  };



  useEffect(() => {
    if (textoBusqueda.trim() === '') {
      // Si el búsqueda está vacío, mostrar todas las órdenes
      setOrdenes(ordenesOriginales);
    } else {
      // Filtrar por número de orden (idp) o nombre de usuario (case-insensitive, búsqueda parcial)
      const busquedaLower = textoBusqueda.toLowerCase();
      const filtrados = ordenesOriginales.filter((item) =>
        // Buscar en número de orden (convertir a string)
        String(item.idp ?? item.id ?? '').toLowerCase().includes(busquedaLower) ||
        // Buscar en nombre de usuario
        item.usuario?.nombre?.toLowerCase().includes(busquedaLower)
      );
      setOrdenes(filtrados);
    }
  }, [textoBusqueda, ordenesOriginales]);
  
  return (
    <main className='mainOrdersAdmin' >
        <h2>Tus órdenes</h2>
          <section className="BuscadorO">
            <Searcher value={textoBusqueda} onChange={setTextoBusqueda} placeh="Buscar una orden"/>
          </section>
        <br />

        <table className="tableOrdersAdmin">
          <thead>
            <tr>
              <th>#ORDEN</th>
              <th>Usuario</th>
              <th>Fecha de órden</th>
              <th>Total orden</th>
              <th>Estado de la orden</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {ordenes.map((o) => (
              <tr key={o.id ?? o.idp ?? Math.random()}>
                <td className="Id_Orden"><b><u>{o.idp}</u></b></td>
                <td>{o.usuario?.nombre}</td>
                <td>{o.fecha ? String(o.fecha).slice(0,10) : ''}</td>
                <td>{o.total}</td>
                <td className={estadoClase(o.estado)}><b>{o.estado === true ? 'Activo' : 'Inactivo'}</b></td>
                <Botones orden={o} />
              </tr>
            ))}
          </tbody>
        </table>
      
    </main>
  );
};


export default ListaO
