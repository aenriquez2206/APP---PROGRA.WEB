import './ProductosAdmin.css'
import productosApi from '../../api/productosApi'
import Searcher from '../Searcher/Searcher'
import {useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";

const ProductosAdmin =()=>{

    const productosOriginales = productosApi.get()

    const [textoBusqueda,setTextoBusqueda] =useState('')
    const [productos, setProductos] =useState(productosOriginales)
    const navigate =useNavigate()

 
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
        navigate('/')
  }


  const NavigateAddProduct =()=>{
        navigate('/admin/productos/editar')
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
                    <img src="" alt="img"/>
                    <span >Categorias</span>
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
                       
                        productos.length > 0 ? productos.map((item)=>{
                            return (
                                <tr>
                                    <td><img src={item.img} alt="img"/></td>
                                    <td>#{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.presentacion}</td>
                                    <td>{item.descripcion}</td>
                                    <td><strong>{item.categoria}</strong></td>
                                    <td>{item.stock}</td>
                                    <td >
                                        <div className='sectionBotonRowProdAdmin'>
                                        <button className='BotonRowProdAdmin'><img src="" alt="img"/>Ed</button>
                                        <button className='BotonRowProdAdmin'><img src="" alt="img"/>El</button>
                                        </div>
                                        
                                    </td>
                                </tr>
                            
                            )
                        } ): <h2>No hay productos.</h2>
                    }
                </tbody>

            </table>
        
        </section>

        </>

    )
}

export default ProductosAdmin