import React, { useState } from "react";
import './ListadoCategoriasAdmin.css'
import Paginacion from '../Paginacion/Paginacion'

const ListadoCategoriasAdmin = () => {

  const [categorias, setCategorias] = useState([
    { nombre: "Videojuegos", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Consolas", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Periféricos", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Juguetes", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Ropa", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Merch", descripcion: "Lorem ipsum dolor sit amet..." },
    { nombre: "Componentes PC", descripcion: "Lorem ipsum dolor sit amet..." },
    // Se puede agregar más para probar mejor paginación
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const categoriasPorPagina = 3; // Cambia según cuantas se quiera por página
  const totalPaginas = Math.ceil(categorias.length / categoriasPorPagina);
  const indiceUltima = paginaActual * categoriasPorPagina;
  const indicePrimera = indiceUltima - categoriasPorPagina;
  const categoriasMostradas = categorias.slice(indicePrimera, indiceUltima);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditIndex(null);
    setNombre("");
    setDescripcion("");
  };

  const handleCrearCategoria = (e) => {
    e.preventDefault();
    const nuevaCategoria = { nombre, descripcion };

    if (editIndex !== null) {
      const nuevas = [...categorias];
      nuevas[editIndex] = nuevaCategoria;
      setCategorias(nuevas);
    } else {
      setCategorias([...categorias, nuevaCategoria]);
    }

    handleCloseModal();
  };

  const handleEliminar = (index) => {
    const confirmacion = window.confirm("¿Seguro que deseas eliminar esta categoría?");
    if (confirmacion) {
      const nuevas = categorias.filter((_, i) => i !== index);
      setCategorias(nuevas);

      // Ajustar página si eliminamos el último elemento de la última página
      if (categorasMostradas.length === 1 && paginaActual > 1) {
        setPaginaActual(paginaActual - 1);
      }
    }
  };

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

      <div className="categorias-header">
        <div className="buscador">
          <span className="icono-buscar">🔍</span>
          <input type="text" placeholder="Buscar una categoría..." />
        </div>
        <button className="btn-agregar" onClick={handleOpenModal}>
          ➕ Agregar categoría
        </button>
      </div>

      <div className="tabla-container">
        <table className="tableCategoriesAdmin"> 
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th className="acciones">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categoriasMostradas.map((cat, i) => (
              <tr key={i}>
                <td className="nombre">{cat.nombre}</td>
                <td>{cat.descripcion}</td>
                <td className="acciones">
                  <button className="btn-icono" onClick={() => handleEditar(i + indicePrimera)}>✏️</button>
                  <button className="btn-icono" onClick={() => handleEliminar(i + indicePrimera)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

      {/* Paginación funcional */}
      <Paginacion
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      />
    </div>
  );
};

export default ListadoCategoriasAdmin;
