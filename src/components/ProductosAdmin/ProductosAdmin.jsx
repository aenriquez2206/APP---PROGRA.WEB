import './ProductosAdmin.css'
import productosApi from '../../api/productosApi'
import Searcher from '../Searcher/Searcher'
import {useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import Paginacion from '../Paginacion/Paginacion'

const ProductosAdmin =()=>{

    const productosOriginales = productosApi.get()

    const [textoBusqueda,setTextoBusqueda] =useState('')
    const [productos, setProductos] =useState(productosOriginales)
    const navigate =useNavigate()


     //paginacion Productos
    const totalProductos = productos.length;
    const [PaginaActualProd, setPaginaActualProd] = useState(1);
    const Productosxpagina = 6;
    const totalPaginasUsers = Math.ceil(totalProductos / Productosxpagina);

    const indexUltimoProd = PaginaActualProd * Productosxpagina;
    const indexPrimerProd = indexUltimoProd - Productosxpagina;
    const productosActuales = productos.slice(indexPrimerProd, indexUltimoProd);
 
  useEffect(()=>{
    if(productos.length <=0){
      alert("no se encontran productos")
    }
  },[productos])

  useEffect(()=>{
      if(textoBusqueda === ''){
        setProductos(productosOriginales) 
      }
      else if(textoBusqueda.length > 3)
        handleBuscar()
    },[textoBusqueda])


  const handleBuscar  = () => {
    const filtrados = 
      productosOriginales.filter((item) => item.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));
      setProductos(filtrados)
  }

  //actualizar conexion categorias
  const NavigateCategorias =()=>{
        navigate('/admin/categorias')
  }


  const NavigateAddProduct =()=>{
        navigate('/admin/productos/agregar')
  }

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Abrir modal
  const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
  };

  // Confirmar eliminación
  const confirmDelete = (id) => {
        productosApi.deleteProducto(id);
        setProductos(productosApi.get());
        setShowModal(false);
        setSelectedProduct(null);
  };

  // Cancelar eliminación
  const cancelDelete = () => {
        setShowModal(false);
        setSelectedProduct(null);
  };

  const handleEditclick = (producto) => {
        navigate('/admin/productos/editar',{state:{producto}});
  }


    return(
        <>
        <section className="sectionProductosAdmin" >
            <h2>Listado de Productos</h2>
            <section className="busquedaProductosAdmin" >
                <Searcher valor={textoBusqueda} render={setTextoBusqueda}/>
                <button 
                className='botonListadoProductosAdmin'
                onClick={()=>handleBuscar()}
                >Buscar</button>
                <button 
                className='botonListadoProductosAdmin'
                onClick={()=>NavigateCategorias()}>
                    <img src="/itemsAssets/list.png" alt="img"/>
                    <div >Categorias</div>
                </button>
                <button 
                className='botonListadoProductosAdmin'
                onClick={()=>NavigateAddProduct()}>Agregar producto</button>
                
            </section>
            <table className="generalTable" >
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Presentacion</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       
                        productosActuales.length > 0 ? productosActuales.map((item)=>{
                            return (
                                <tr>
                                    <td><img className="imgRowProdAdmin"
                                    src={item.img} alt="img"/></td>
                                    <td>#{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.presentacion}</td>
                                    <td>{item.descripcion}</td>
                                    <td><strong>{item.categoria}</strong></td>
                                    <td>{item.stock}</td>
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
                        } ): <h2>No hay productos.</h2>
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

export default ProductosAdmin