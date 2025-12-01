import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./DetalleOrden.css";
import Paginacion from '../Paginacion/Paginacion'
import ordenesApi from '../../api/ordenesApi'

const DetalleOrden = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // Obtener orden desde state o desde API
  const [orden, setOrden] = useState(location.state?.orden ?? null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar detalles de la orden y sus productos
  useEffect(() => {
    const cargarOrden = async () => {
      try {
        setLoading(true);
        
        // Si ya tenemos la orden desde state, usarla directamente
        let ordenData = null;
        
        if (location.state?.orden && Object.keys(location.state.orden).length > 0) {
          // Usar la orden pasada en state (ya tiene todos los detalles)
          ordenData = location.state.orden;
          console.log('Orden desde state:', ordenData);
        } else {
          // Si no viene en state, cargar desde API
          // El endpoint backend expone GET /orden para todas las órdenes.
          // Algunos clientes pedían findOne(userId) para órdenes de usuario; aquí
          // necesitamos buscar una orden por su id (parámetro de ruta), por lo
          // que cargaremos todas y luego filtramos por id/idp.
          const rawordenes = await ordenesApi.findAll();
          console.log('ID buscado (orden):', id);
          console.log('Respuesta del API (todas las órdenes):', rawordenes);
          
          // Normalizar respuesta
          let ordenesArray = [];
          if (Array.isArray(rawordenes)) {
            ordenesArray = rawordenes;
          } else if (rawordenes?.data && Array.isArray(rawordenes.data)) {
            ordenesArray = rawordenes.data;
          } else if (rawordenes?.data) {
            ordenesArray = [rawordenes.data];
          } else {
            ordenesArray = [rawordenes];
          }
          
          // Filtrar por idp o id que coincida con el parámetro de ruta
          const idNumerico = Number(id);
          ordenData = ordenesArray.find(o => 
            Number(o.idp) === idNumerico || Number(o.id) === idNumerico
          ) ?? null;
          
          console.log('Orden encontrada:', ordenData);
        }
        
        if (!ordenData || !ordenData.detalles) {
          setError(`No se encontraron detalles para la orden ${id}`);
          setOrden(null);
          setProductos([]);
          setLoading(false);
          return;
        }
        
        setOrden(ordenData);
        
        // Obtener productos de la orden desde detalles[].producto
        const productosOrden = Array.isArray(ordenData.detalles) 
          ? ordenData.detalles.map(detalle => ({
              ...detalle.producto,
              cantidad: detalle.cantidad ?? 1,
              detalleId: detalle.id
            }))
          : [];
        
        setProductos(productosOrden);
        console.log('Productos cargados:', productosOrden);
        setError(null);
      } catch (err) {
        console.error("Error cargando orden:", err);
        setError("Error al cargar los detalles de la orden");
        setProductos([]);
        setOrden(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      cargarOrden();
    }
  }, [id, location.state]);
  

  // Estado de paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 5;

  // Cálculos de paginación
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosMostrados = productos.slice(indicePrimero, indiceUltimo);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  if (loading) {
    return <div className="detalle-orden-container"><h2>Cargando detalles de la orden...</h2></div>;
  }

  if (error || !orden) {
    return (
      <div className="detalle-orden-container">
        <h2>{error || "No se encontró la orden"}</h2>
      </div>
    );
  }

  return (
    <div className="detalle-orden-container">
      <h2>Detalles de Orden</h2>

      {/* Información general */}
      <div className="orden-card">
        <div className="orden-info">
          <h3>
            Orden <span className="orden-id">#{orden.idp ?? orden.id}</span>
          </h3>
        </div>

        <div className="orden-datos">
          <p><strong>Estado:</strong> <span className="estado">{orden.estado ? 'Entregado' : 'Pendiente'}</span></p>
          <p><strong>Monto total:</strong> S/{(Number(orden.total) || 0).toFixed(2)}</p>
          <p><strong>Fecha:</strong> {typeof orden.fecha === 'string' ? orden.fecha.slice(0, 10) : orden.fecha}</p>
          <p><strong>Usuario:</strong> {orden.usuario?.nombre ?? 'N/A'}</p>
        </div>
      </div>

      {/* Tabla de productos */}
      <div className="productos-section">
        <h4>Productos ordenados</h4>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Género</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.length > 0 ? (
              productosMostrados.map((p) => (
                <tr key={p.id ?? p.detalleId ?? Math.random()}>
                  <td className="producto-id">
                    {p.img ? (
                      <img src={p.img} alt={p.nombre} />
                    ) : (
                      <div className="img-placeholder">Sin imagen</div>
                    )}
                    <span className="id-link">#{p.id}</span>
                  </td>
                  <td>{p.nombre}</td>
                  <td><strong>{p.genero}</strong></td>
                  <td>{p.cantidad ?? 1}</td>
                  <td>S/{(Number(p.precio) || 0).toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No hay productos en esta orden</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Paginación funcional reutilizando componente */}
        <Paginacion
          totalPaginas={totalPaginas}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
      </div>
    </div>
  );
};

export default DetalleOrden;
