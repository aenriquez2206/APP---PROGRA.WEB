import './ListadoOrdenes.css'
import estadoClase from './camcolor'
import { useState, useEffect } from "react";
import pedidosApi from '../../api/ordenesApi';
const Botones = () => {
  return (
      <td>
        <button>Ver detalle</button>
      </td>
  );
};

const ListaO = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState('');
  
  useEffect(() => {
    handleOnLoad();
  }, []);

  const handleOnLoad = async () => {
    try {
      const rawordenes = await pedidosApi.findAll();  
        setOrdenes(rawordenes);
    } catch (error) {
      console.error("Error cargando órdenes:", error);
      setOrdenes([]); 
    }
  };

  const handleBuscar = async () => {
    if (textoBusqueda === '') {
      return handleOnLoad();
    }
    try {
      const data = await pedidosApi.findOne(textoBusqueda);  
      if (data) {
        setOrdenes([data]);
      } else {
        setOrdenes([]);
      }

    } catch (error) {
      console.error("Error buscando orden:", error);
      setOrdenes([]);
    }
  };
  
  return (
    <main className='mainOrdersAdmin' >
        <h2>Tus órdenes</h2>
        <section className="BuscadorO">
            <div>
              
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
                <td>{o.id_user}</td>
                <td>{o.fecha}</td>
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
