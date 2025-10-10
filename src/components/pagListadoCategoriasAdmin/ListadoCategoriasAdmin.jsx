import React, { useState } from "react";
import './ListadoCategoriasAdmin.css'

const ListadoCategoriasAdmin = () => {

    const [categorias, setCategorias] = useState([
    { nombre: "Videojuegos", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Consolas", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Perifericos", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Juguetes", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Ropa", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Merch", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
    { nombre: "Componentes PC", descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..." },
  ]);

    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

     // 👉 Crear nueva categoría (solo en frontend)
    const handleCrearCategoria = (e) => {
        e.preventDefault();

        const nuevaCategoria = {
        nombre,
        descripcion,
        };

        // Agregar nueva categoría al arreglo
        setCategorias([...categorias, nuevaCategoria]);

        // Limpiar formulario y cerrar modal
        setNombre("");
        setDescripcion("");
        setShowModal(false);
    };

    return(
    <>
    <div className="categorias-container">
        <h1 className="categorias-titulo">Listado de categorías</h1>

        {/* Buscador y boton */}
        <div className="categorias-header">
            <div className="buscador">
                <span className="icono-buscar">🔍</span>
                <input type="text" placeholder="Buscar un producto..."/>
            </div>
            <button className="btn-agregar" onClick={handleOpenModal}>➕ Agregar categoría</button>
        </div>

        {/* Tabla */}
        <div className="tabla-container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th className="acciones">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((cat, i) => (
                        <tr key={i}>
                            <td className="nombre">{cat.nombre} </td>
                            <td>{cat.descripcion} </td>
                            <td className="acciones">
                                <button className="btn-icono">✏️</button>
                                <button className="btn-icono">🗑️</button>
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>

        {/* Modal */}
        {showModal && (
             <div className="modal-overlay">
                <div className="modal">
                    <h3>Nueva categoría</h3>
                    <form onSubmit={handleCrearCategoria}>
                        <label>Nombre</label>
                        <input type="text" placeholder="Nombre de la categoria" value={nombre} onChange={(e) => setNombre(e.target.value) }
                        required
                    />

                    <label>Descripción</label>
                    <textarea placeholder="Descripción del producto..." value={descripcion} onChange={(e) => setDescripcion(e.target.value) } required></textarea>

                    <div className="modal-actions">
                        <button type="button" className="btn-cancelar" onClick={handleCloseModal}>Cancelar</button>
                        <button type="submit" className="btn-crear" >➕ Crear categoría</button>
                    </div>
                    </form>
                </div>
             </div>
        )}


        {/* Paginacion */}
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
    </>
        )
    }

export default ListadoCategoriasAdmin;