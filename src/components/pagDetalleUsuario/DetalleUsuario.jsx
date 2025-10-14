import React from "react";
import { useNavigate } from "react-router-dom";
import './DetalleUsuario.css';
import usuarioImg from './usuarioejemplo.webp';

const DetalleUsuario = () => {
  const navigate = useNavigate();

  // Lista de órdenes de ejemplo
  const ordenes = [
    { id: 1234, fecha: "20/01/2025", total: 199.00 },
    { id: 2356, fecha: "20/02/2025", total: 249.00 },
    { id: 4577, fecha: "20/03/2025", total: 179.00 },
    { id: 3743, fecha: "15/04/2025", total: 299.00 },
    { id: 8422, fecha: "10/05/2025", total: 129.00 },
    { id: 9921, fecha: "08/06/2025", total: 399.00 },
  ];

  // Función para navegar al detalle de una orden
  const verDetalle = (id) => {
    navigate(`/detalle-orden/${id}`);
  };

  return (
    <div className="detalle-usuario-container">
      <h2>Detalles de usuario</h2>

      {/*  Información del usuario */}
      <div className="usuario-card">
        <div className="usuario-info">
          <h3>Juan Pérez</h3>
          <p><strong>Correo:</strong> <a href="mailto:juan.perez@gmail.com">juan.perez@gmail.com</a></p>
          <p><strong>Fecha de registro:</strong> 20/01/2025</p>
          <p><strong>Estado:</strong> Activo</p>
        </div>

        <div className="usuario-foto">
          <img src={usuarioImg} alt="Usuario" />
        </div>
      </div>

      {/* Tabla de órdenes */}
      <div className="ordenes-section">
        <h4>Últimas órdenes</h4>
        <table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {ordenes.map((orden, index) => (
              <tr key={index}>
                <td className="id-link">#{orden.id}</td>
                <td>{orden.fecha}</td>
                <td>S/{orden.total.toFixed(2)}</td>
                <td>
                  <button className="btn-ver" onClick={() => verDetalle(orden.id)}>
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación (decorativa por ahora) */}
        <div className="paginacion">
          <button>⬅️</button>
          <button className="activo">1</button>
          <button>2</button>
          <button>3</button>
          <span>...</span>
          <button>10</button>
          <button>➡️</button>
        </div>
      </div>
    </div>
  );
};

export default DetalleUsuario;
