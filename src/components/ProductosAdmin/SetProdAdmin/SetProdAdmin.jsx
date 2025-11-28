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
        precio:0,
        descuento:0,
        genero:"",
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

    const handleSubmit =async (producto)=>{
        if(!producto.nombre || !producto.presentacion || !producto.descripcion || !producto.categoria || !producto.stock ){
            alert("Por favor complete todos los campos")
            return
        }
        await productosApi.create(producto)
        //alert("JSON.stringify(producto)")
        alert("Producto Agregado!")
        navigate('/admin/productos/')
    }
    

/*
  // Manejar selección de imagen desde el input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setProducto({ ...producto, img: file });
      setPreview(URL.createObjectURL(file));
    }
  };
*/
const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        // Cuando termine de leer el archivo, lo guardamos como texto en el estado
        reader.onloadend = () => {
            setImagen(file); // (Opcional, por si lo usas en otro lado)
            setPreview(reader.result); // Para mostrar la vista previa
            
            // AQUÍ ESTÁ LA CLAVE: Guardamos la cadena Base64 en el producto
            setProducto({ ...producto, img: reader.result }); 
        };

        // Leemos el archivo como URL de datos (Base64)
        reader.readAsDataURL(file); 
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

                    <label>Presentación</label>
                    <br/>
                    <input 
                    type="text" 
                    value={producto.presentacion}
                    className='inputSectionProd'
                    placeholder='Presentación'
                    onChange={(e)=>setProducto({...producto,presentacion: e.target.value})}/>
  
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
                                        <option value={categoria.nombre}>
                                            {categoria.nombre}
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
                            <span> o </span>
                            <label htmlFor="imagenInput" className="boton-subir">
                            Seleccionar imagen
                            </label>
                            <input
                            id="imagenInput"
                            type="file"
                            accept="image/*"
                            //value={producto.img}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            />
                        </>
                )}
                </div>
                <br/>
                <br/>
                <label>Genero</label>
                <br/>
                        <input
                        type="text"
                        min="0"
                        max="100"
                        className='StockSection'
                        value={producto.genero}
                        placeholder='Genero'
                        onChange={(e)=>setProducto({...producto, genero:e.target.value})}></input>
                <br/>
                <br/>
                <label>Precio</label>
                <br/>
                
                        <input
                        type="number"
                        min="0"
                        step="0.01"
                        className='StockSection'
                        value={producto.precio}
                        placeholder='Stock'
                        onChange={(e)=>setProducto({...producto, precio:e.target.value})}></input>
                <br/>
                <br/>
                <label>Descuento</label>
                <br/>
                        <input
                        type="number"
                        min="0"
                        max="100"
                        className='StockSection'
                        value={producto.descuento}
                        placeholder='Stock'
                        onChange={(e)=>setProducto({...producto, descuento:e.target.value})}></input>
                <br/>
                <br/>
                <label>Stock</label>

                <div className='sectionSubmitProd'>
                        <br/>
                        <input
                        type="number"
                        min="0"
                        className='StockSection'
                        value={producto.stock}
                        placeholder='Stock'
                        onChange={(e)=>setProducto({...producto, stock:e.target.value})}></input>
                    
                    <button className='buttonSubmitProd'
                    onClick={()=>handleSubmit(producto)}>
                        Crear producto
                    </button>
                </div>
                
                </section>
                
            </section>
            
        </article>


        </>
    )
}

export default SetProdAdmin