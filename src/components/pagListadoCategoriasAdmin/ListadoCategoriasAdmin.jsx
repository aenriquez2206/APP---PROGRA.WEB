import '../ProductosAdmin/ProductosAdmin'
import categoriasApi from '../../api/categoriasApi'
import Searcher from '../Searcher/Searcher'
import {useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import Paginacion from '../Paginacion/Paginacion'

const ListadoCategoriasAdmin =()=>{

    const [categoriasOriginales,setcategoriasOriginales] =useState([]);
    const handleOnLoad = async () => {
    try {
        const rawprod = await categoriasApi.findAll();
        console.log("Datos recibidos:", rawprod); // Agrega esto para verificar en consola
        
        if (rawprod) {
            setcategoriasOriginales(rawprod);
            setProductos(rawprod); // <--- AGREGA ESTA LÍNEA
        }
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

    useEffect(()=>{
        handleOnLoad()
    },[])

    const [textoBusqueda,setTextoBusqueda] =useState('')
    const [productos, setProductos] =useState([])
    const navigate =useNavigate()


     //paginacion Productos
    const totalProductos = productos.length;
    const [PaginaActualProd, setPaginaActualProd] = useState(1);
    const Productosxpagina = 6;
    const totalPaginasUsers = Math.ceil(totalProductos / Productosxpagina);

    const indexUltimoProd = PaginaActualProd * Productosxpagina;
    const indexPrimerProd = indexUltimoProd - Productosxpagina;
    const productosActuales = productos.slice(indexPrimerProd, indexUltimoProd);
 
  
  useEffect(() => {
    if (textoBusqueda === '') {
        setProductos(categoriasOriginales);
    } else if (textoBusqueda.length > 3) { // Ojo: > 3 significa que con 3 letras no busca
        handleBuscar();
    } else {
        // Si hay texto pero es corto, tal vez quieras mostrar todo o filtrar igual
        setProductos(categoriasOriginales); 
    }
}, [textoBusqueda, categoriasOriginales]);

  const handleBuscar  = () => {
    const filtrados = 
      categoriasOriginales.filter((item) => item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));
      setProductos(filtrados)
  }



  const NavigateAddProduct =()=>{
        navigate('/admin/categorias/agregar',{state:{}})
  }

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Abrir modal
  const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
  };

  // Confirmar eliminación
  const confirmDelete = async (id) => {
        await categoriasApi.remove(id);
        const prod = await categoriasApi.findAll();
        setProductos(prod);
        setShowModal(false);
        setSelectedProduct(null);
  };

  // Cancelar eliminación
  const cancelDelete = () => {
        setShowModal(false);
        setSelectedProduct(null);
  };

  const handleEditclick = (categoria) => {
        navigate('/admin/categorias/agregar',{state:{categoria}});
  }


    return(
        <>
        <section className="sectionProductosAdmin" >
            <h2>Listado de Categorías</h2>
            <section className="busquedaProductosAdmin" >
                <Searcher valor={textoBusqueda} onChange={setTextoBusqueda} placeh="Buscar una categoría"/>
                <button 
                className='botonListadoProductosAdmin'
                onClick={()=>handleBuscar()}
                >Buscar</button>
                <button 
                className='botonListadoProductosAdmin'
                onClick={()=>NavigateAddProduct()}>Agregar categoria</button>
                
            </section>
            <table className="generalTable" >
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Label</th>
                        <th>Ruta</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        //productosActuales.length > 0 ? 
                        productosActuales.map((item)=>{
                            return (
                                <tr>
                                    <td><img className="imgRowProdAdmin"
                                    src={item.img} alt="img"/></td>
                                    <td>#{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.label}</td>
                                    <td>{item.ruta}</td>
                                    <td className="descripcionProd" title={item.descripcion}>{item.descripcion}</td>
                                    <td >
                                        <div className='sectionBotonRowProdAdmin'>
                                        <button 
                                        className='BotonRowProdAdmin'
                                        onClick={()=>handleEditclick(item)}><img src="/itemsAssets/edit_green.png" alt="img"/></button>
                                        <button 
                                        className='BotonRowProdAdmin'
                                        onClick={()=>handleDeleteClick(item)}><img src="/itemsAssets/delete.png" alt="img"/></button>
                                        </div>
                                        
                                    </td>
                                </tr>
                            
                            )
                        } )//: <h2>No hay productos.</h2>
                    }
                </tbody>

            </table>
            <Paginacion totalPaginas={totalPaginasUsers} paginaActual={PaginaActualProd} setPaginaActual={setPaginaActualProd}/>

            {/* Modal de confirmación */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Eliminar producto</h2>
                        <p>
                        ¿Estás seguro que deseas eliminar el producto{" "}
                        <strong>{selectedProduct?.nombre}</strong>?
                        </p>
                        <div className="modal-buttons">
                            <button className="confirm-btn" onClick={()=>confirmDelete(selectedProduct?.id)}>
                                Sí, eliminar
                            </button>
                            <button className="cancel-btn" onClick={cancelDelete}>
                                No, cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>

        </>

    )
}

export default ListadoCategoriasAdmin