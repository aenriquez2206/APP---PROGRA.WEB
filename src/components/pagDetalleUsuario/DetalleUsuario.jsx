import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './DetalleUsuario.css';
import Paginacion from '../Paginacion/Paginacion'
import ordenesApi from '../../api/ordenesApi';
import { handleAuthError } from '../../utils/authUtils.js';

const DetalleUsuario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Obtener usuario desde state o inicializar vacío
  const [usuario, setUsuario] = useState(location.state?.usuario ?? null);
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar órdenes del usuario
  useEffect(() => {
    const cargarOrdenes = async () => {
      if (!usuario?.id) {
        console.log('DetalleUsuario: No hay usuario ID');
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        
        console.log(`DetalleUsuario: Cargando órdenes para usuario ${usuario.id}`);
        
        const rawordenes = await ordenesApi.findOne(usuario.id);
        
        // Normalizar respuesta
        const data = Array.isArray(rawordenes) ? rawordenes : (rawordenes?.data ?? []);
        
        console.log('DetalleUsuario: Órdenes cargadas:', data);
        setOrdenes(data);
      } catch (error) {
        console.error("Error cargando órdenes del usuario:", error);
        
        if (!handleAuthError(error)) {
          return; // Ya fue redirigido a login
        }
        
        setError('No se pudieron cargar las órdenes del usuario');
        setOrdenes([]);
      } finally {
        setLoading(false);
      }
    };
    
    cargarOrdenes();
  }, [usuario]);

  if (!usuario) {
    return (
      <div className="detalle-usuario-container">
        <h2>No hay usuario seleccionado</h2>
        <p>Por favor, selecciona un usuario desde el dashboard.</p>
        <button onClick={() => navigate('/admin')}>Volver al Dashboard</button>
      </div>
    );
  }

  const [paginaActual, setPaginaActual] = useState(1);
  const ordenesPorPagina = 3;
  const totalPaginas = Math.ceil(ordenes.length / ordenesPorPagina);

  const indiceUltima = paginaActual * ordenesPorPagina;
  const indicePrimera = indiceUltima - ordenesPorPagina;
  const ordenesMostradas = ordenes.slice(indicePrimera, indiceUltima);

  const verDetalle = (id, orden) => {
    navigate(`/admin/detalle-orden/${id}`, { state: { orden } });
  };

  return (
    <div className="detalle-usuario-container">
      <h2>Detalles de usuario</h2>

      {/* Información del usuario */}
      <div className="usuario-card">
        <div className="usuario-info">
          <h3>{usuario.nombre}</h3>
          <p><strong>Correo:</strong> <a href={`mailto:${usuario.correo}`}>{usuario.correo}</a></p>
          <p><strong>Fecha de registro:</strong> {typeof usuario.fechaRegistro === 'string' ? usuario.fechaRegistro.slice(0, 10) : usuario.fechaRegistro}</p>
          <p><strong>Estado:</strong> {usuario.estado ? 'Activo' : 'Inactivo'}</p>
        </div>

        <div className="usuario-foto">
          <img src={usuario.img} alt={usuario.nombre} />
        </div>
      </div>

      {/* Tabla de órdenes */}
      <div className="ordenes-section">
        <h4>Últimas órdenes</h4>
        
        {loading && <p style={{ textAlign: 'center' }}>Cargando órdenes...</p>}
        
        {error && (
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#fee', 
            color: '#c00', 
            borderRadius: '4px',
            marginBottom: '15px'
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {!loading && ordenesMostradas.length === 0 && (
          <p style={{ textAlign: 'center', color: '#666' }}>Este usuario no tiene órdenes</p>
        )}
        
        {!loading && ordenesMostradas.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Fecha</th>
                  <th>Total</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {ordenesMostradas.map((orden) => (
                  <tr key={orden.idp ?? Math.random()}>
                    <td className="id-link">#{orden.idp}</td>
                    <td>{typeof orden.fecha === 'string' ? orden.fecha.slice(0, 10) : orden.fecha}</td>
                    <td>S/{(Number(orden.total) || 0).toFixed(2)}</td>
                    <td>{orden.estado ? "Entregado" :"No Entregado "}</td>
                    <td>
                      <button className="btn-ver" onClick={() => verDetalle(orden.idp, orden)}>
                        Ver detalle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Paginación funcional */}
            <Paginacion
              totalPaginas={totalPaginas}
              paginaActual={paginaActual}
              setPaginaActual={setPaginaActual}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DetalleUsuario;
