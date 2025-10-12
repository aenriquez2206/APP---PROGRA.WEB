import './SetProdAdmin.css'
import { useState } from 'react'
import categoriasApi from '../../../api/categoriasApi'
import productosApi from '../../../api/productosApi'
import { useNavigate } from 'react-router-dom'
const SetProdAdmin=()=>{
    const productoDefault ={
        id: 0,
        img: "",
        nombre: "",
        presentacion: "",
        descripcion:"",
        categoria: "",
        stock: 0,
    }
    const categorias = categoriasApi.get()
    const [producto,setProducto] =useState(productoDefault)
    const navigate = useNavigate()
    const [imagen, setImagen] = useState(null);
    const [preview, setPreview] = useState(null);

    //llenar crea categoria
    const handleNavigateCrearCategoria=()=>{
        navigate('/admin')
    }
    

    
  // Manejar selección de imagen desde el input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Manejar "drag and drop"
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => e.preventDefault();


    return(
        <>
        <article  className="insertSecProd">
            <h2>Agregar un producto</h2>
            <section className="containerInsertProd">
                <section className='sectInsertProd'>
                    <label>Nombre del producto</label>
                    <br/>
                    <input 
                    type="text" 
                    value={producto.nombre}
                    className='inputSectionProd'
                    placeholder='Nombre del producto'
                    onChange={(e)=>setProducto({...producto,nombre: e.target.value})}/>
                    <br/>
                    <br/>
                    <label>Presentación</label>
                    <br/>
                    <input 
                    type="text" 
                    value={producto.presentacion}
                    className='inputSectionProd'
                    placeholder='Presentación'
                    onChange={(e)=>setProducto({...producto,presentacion: e.target.value})}/>
                    <br/>
                    <br/>
                    <label>Categoria</label>
                    <br/>
                    <div className='cateogriaDivision'>
                        <select 
                        className='selectSectionProd'
                        onChange={(e)=>setProducto({...producto,categoria: e.target.value})}
                        >
                            <option className="optionInic" value="" disabled selected>Selecciona la categoria del producto</option>
                            {
                                categorias.map((categoria)=>{
                                    return(
                                        <option value={categoria}>
                                            {categoria}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <button
                            className='buttonInputSectionProd'
                            onClick={()=>handleNavigateCrearCategoria()}
                        >+</button>
                    </div>
                    <br/>
                    <label>Descripcion</label>
                    <br/>
                    <textarea placeholder='Descripción del producto'
                    className='textAreaProd'
                    value={producto.descripcion}
                    onChange={(e)=>setProducto({...producto,descripcion:e.target.value})}></textarea>
                    <br/>
                    <br/>
                    
                </section>
                <section className='sectInsertProd'>
                <div
                className="zona-imagen"
                onDrop={handleDrop}
                onDragOver={handleDragOver}>
                    {preview ? (
                        < img src={preview} alt="Vista previa" className="preview-img" />
                        ) : (
                        <>
                            <p>Arrastra la imagen a esta zona</p>
                            <span>o</span>
                            <label htmlFor="imagenInput" className="boton-subir">
                            Seleccionar imagen
                            </label>
                            <input
                            id="imagenInput"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            />
                        </>
                )}
                </div>
                
                </section>


            </section>
            
        </article>


        </>
    )
}

export default SetProdAdmin