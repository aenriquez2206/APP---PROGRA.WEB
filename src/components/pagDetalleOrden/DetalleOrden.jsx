import React from "react";
import { useParams } from "react-router-dom"; // 👈 Importa esto
import "./DetalleOrden.css";

import img1 from "./imgs/mario_kart.webp";
import img2 from "./imgs/2k26.webp";
import img3 from "./imgs/nintendo_switch.png";
import img4 from "./imgs/gengar.png";
import img5 from "./imgs/metal_gear.webp";
import img6 from "./imgs/auriculares.webp";

const DetalleOrden = () => {
  // 👇 Extrae el parámetro de la URL (por ejemplo, /orden/1234)
  const { id } = useParams();

  const productos = [
    { id: 2223, nombre: "Mario Kart", categoria: "Videojuegos", cantidad: 10, total: 19.0, img: img1 },
    { id: 6425, nombre: "2K26", categoria: "Videojuegos", cantidad: 4, total: 19.0, img: img2 },
    { id: 2344, nombre: "Nintendo Switch with Joy", categoria: "Consola", cantidad: 4, total: 19.0, img: img3 },
    { id: 4344, nombre: "Jazwares Pokemon Gengar 24", categoria: "Coleccionable", cantidad: 12, total: 19.0, img: img4 },
    { id: 5454, nombre: "METAL GEAR SOLID DELT", categoria: "Videojuegos", cantidad: 1, total: 19.0, img: img5 },
    { id: 8123, nombre: "Auriculares PC", categoria: "Periferico", cantidad: 1, total: 19.0, img: img6 },
  ];

  // 📦 Lista de órdenes de ejemplo
  const ordenes = [
    { id: 1234, fecha: "20/01/2025", total: 199.00 },
    { id: 2356, fecha: "20/02/2025", total: 249.00 },
    { id: 4577, fecha: "20/03/2025", total: 179.00 },
    { id: 3743, fecha: "15/04/2025", total: 299.00 },
    { id: 8422, fecha: "10/05/2025", total: 129.00 },
    { id: 9921, fecha: "08/06/2025", total: 399.00 },
  ];

  return (
    <>
      <div className="detalle-orden-container">
        <h2>Detalles de Órden</h2>

        <div className="orden-card">
          <div className="orden-info">
            {/* 👇 Aquí se muestra dinámicamente el número de orden */}
            <h3>
              Orden <span className="orden-id">#{id}</span>
            </h3>
          </div>

          <div className="orden-datos">
            <p>
              <strong>Estado:</strong> <span className="estado">Entregado</span>
            </p>
            <p>
              <strong>Monto total:</strong> S/400.00
            </p>
          </div>
        </div>

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
              {productos.map((p, index) => (
                <tr key={index}>
                  <td className="producto-id">
                    <img src={p.img} alt={p.nombre} />
                    <span className="id-link">#{p.id}</span>
                  </td>
                  <td>{p.nombre}</td>
                  <td>
                    <strong>{p.categoria}</strong>
                  </td>
                  <td>{p.cantidad}</td>
                  <td>S/{p.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
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
    </>
  );
};

export default DetalleOrden;
