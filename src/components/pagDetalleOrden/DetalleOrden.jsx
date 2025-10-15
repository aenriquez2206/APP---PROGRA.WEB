import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DetalleOrden.css";
import Paginacion from '../Paginacion/Paginacion'
import img1 from "./imgs/mario_kart.webp";
import img2 from "./imgs/2k26.webp";
import img3 from "./imgs/nintendo_switch.png";
import img4 from "./imgs/gengar.png";
import img5 from "./imgs/metal_gear.webp";
import img6 from "./imgs/auriculares.webp";

const DetalleOrden = () => {
  const { id } = useParams();

  const productos = [
    { id: 2223, nombre: "Mario Kart", categoria: "Videojuegos", cantidad: 10, total: 19.0, img: img1 },
    { id: 6425, nombre: "2K26", categoria: "Videojuegos", cantidad: 4, total: 19.0, img: img2 },
    { id: 2344, nombre: "Nintendo Switch with Joy", categoria: "Consola", cantidad: 4, total: 19.0, img: img3 },
    { id: 4344, nombre: "Jazwares Pokemon Gengar 24", categoria: "Coleccionable", cantidad: 12, total: 19.0, img: img4 },
    { id: 5454, nombre: "METAL GEAR SOLID DELT", categoria: "Videojuegos", cantidad: 1, total: 19.0, img: img5 },
    { id: 8123, nombre: "Auriculares PC", categoria: "Periférico", cantidad: 1, total: 19.0, img: img6 },
  ];
  

  // Estado de paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 3;

  // Cálculos de paginación
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosMostrados = productos.slice(indicePrimero, indiceUltimo);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  return (
    <div className="detalle-orden-container">
      <h2>Detalles de Orden</h2>

      {/* Información general */}
      <div className="orden-card">
        <div className="orden-info">
          <h3>
            Orden <span className="orden-id">#{id}</span>
          </h3>
        </div>

        <div className="orden-datos">
          <p><strong>Estado:</strong> <span className="estado">Entregado</span></p>
          <p><strong>Monto total:</strong> S/400.00</p>
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
              <th>Categoría</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productosMostrados.map((p) => (
              <tr key={p.id}>
                <td className="producto-id">
                  <img src={p.img} alt={p.nombre} />
                  <span className="id-link">#{p.id}</span>
                </td>
                <td>{p.nombre}</td>
                <td><strong>{p.categoria}</strong></td>
                <td>{p.cantidad}</td>
                <td>S/{p.total.toFixed(2)}</td>
              </tr>
            ))}
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
