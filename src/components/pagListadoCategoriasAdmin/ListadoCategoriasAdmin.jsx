import React, { useState } from "react";
import './ListadoCategoriasAdmin.css'

const ListadoCategoriasAdmin = () => {

  const [categorias, setCategorias] = useState([
    { nombre: "Videojuegos", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Consolas", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Periféricos", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Juguetes", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Ropa", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Merch", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Componentes PC", descripcion: "Lorem ipsum dolor sit amet..." },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Nuevo: saber si estamos editando o creando
  const [editIndex, setEditIndex] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditIndex(null);
    setNombre("");
    setDescripcion("");
  };

  // Crear o editar categoría
  const handleCrearCategoria = (e) => {
    e.preventDefault();

    const nuevaCategoria = { nombre, descripcion };

    if (editIndex !== null) {
      // Si estamos editando, reemplazamos la categoría existente
      const nuevas = [...categorias];
      nuevas[editIndex] = nuevaCategoria;
      setCategorias(nuevas);
    } else {
      // Si no estamos editando, agregamos una nueva
      setCategorias([...categorias, nuevaCategoria]);
    }

    handleCloseModal();
  };

  // Eliminar categoría
  const handleEliminar = (index) => {
    const confirmacion = window.confirm("¿Seguro que deseas eliminar esta categoría?");
    if (confirmacion) {
      const nuevas = categorias.filter((_, i) => i !== index);
      setCategorias(nuevas);
    }
  };

  // Editar categoría
  const handleEditar = (index) => {
    const cat = categorias[index];
    setNombre(cat.nombre);
    setDescripcion(cat.descripcion);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div className="categorias-container">
      <h1 className="categorias-titulo">Listado de categorías</h1>

      {/* Buscador y botón */}
      <div className="categorias-header">
        <div className="buscador">
          <span className="icono-buscar">🔍</span>
          <input type="text" placeholder="Buscar una categoría..." />
        </div>
        <button className="btn-agregar" onClick={handleOpenModal}>
          ➕ Agregar categoría
        </button>
      </div>

      {/* Tabla */}
      <div className="tabla-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat, i) => (
              <tr key={i}>
                <td className="nombre">{cat.nombre}</td>
                <td>{cat.descripcion}</td>
                <td className="acciones">
                  <button className="btn-icono" onClick={() => handleEditar(i)}>✏️</button>
                  <button className="btn-icono" onClick={() => handleEliminar(i)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editIndex !== null ? "Editar categoría" : "Nueva categoría"}</h3>
            <form onSubmit={handleCrearCategoria}>
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Nombre de la categoría"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <label>Descripción</label>
              <textarea
                placeholder="Descripción de la categoría..."
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              ></textarea>

              <div className="modal-actions">
                <button type="button" className="btn-cancelar" onClick={handleCloseModal}>
                  Cancelar
                </button>
                <button type="submit" className="btn-crear">
                  {editIndex !== null ? "💾 Guardar cambios" : "➕ Crear categoría"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
  );
};

export default ListadoCategoriasAdmin;
