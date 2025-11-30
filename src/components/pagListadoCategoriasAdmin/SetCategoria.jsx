
import { useState,useEffect } from 'react'
import categoriasApi from '../../api/categoriasApi'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const SetCategoria=()=>{
    const categoriaDefault ={
        nombre: "",
        img: "",
        ruta: "",
        label:"",
        descripcion: ""
    }

    const location = useLocation();
    const obj = location.state.categoria;
    
    const [categorias,setcategorias] =useState([]);
    const [Categoria,setCategoria] =useState(categoriaDefault)
    const navigate = useNavigate()
    const [imagen, setImagen] = useState(null);
    const [preview, setPreview] = useState(obj ? obj.img : null);

    const handleOnLoad = async () => {
        try {
            const rawcat = await categoriasApi.findAll();
            
            if (rawcat) {
                setcategorias(rawcat);
            }
        } catch (error) {
            console.error("Error al cargar Categorias:", error);
        }
    }

    useEffect(()=>{
        if (obj){
            setCategoria(obj)
        }
        handleOnLoad()
    },[])



    const handleSubmit =async (categoria)=>{
        if(!categoria.nombre || !categoria.label || !categoria.descripcion ){
            alert("Por favor complete todos los campos")
            return
        }
        console.log(categoria)
        if (obj){
            await categoriasApi.update(categoria)
            alert("Categoria Editada!")
        }
        else{
            await categoriasApi.create(categoria)
            alert("Categoria Agregada!")
        }
        navigate('/admin/categorias/')
    }
    

const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        // Cuando termine de leer el archivo, lo guardamos como texto en el estado
        reader.onloadend = () => {
            setImagen(file); // (Opcional, por si lo usas en otro lado)
            setPreview(reader.result); // Para mostrar la vista previa
            
            // AQUÍ ESTÁ LA CLAVE: Guardamos la cadena Base64 en el Categoria
            setCategoria({ ...Categoria, img: reader.result }); 
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
      const reader = new FileReader();
      
      // Cuando termine de leer el archivo, lo guardamos como texto en el estado
      reader.onloadend = () => {
        setImagen(file); // (Opcional)
        setPreview(reader.result); // Para mostrar la vista previa
        
        // AQUÍ ESTÁ LA CLAVE: Guardamos la cadena Base64 en el Categoria
        setCategoria({ ...Categoria, img: reader.result }); 
      };

      // Leemos el archivo como URL de datos (Base64)
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => e.preventDefault();


    return(
        <>
        <article  className="insertSecProd">
            <h2>{obj ? "Editar categoria" :"Agregar una categoria"}</h2>
            <section className="containerInsertProd">
                <section className='sectInsertProd'>
                    <label>Nombre de la categoria</label>
                    <br/>
                    <input 
                    type="text" 
                    value={Categoria.nombre}
                    className='inputSectionProd'
                    placeholder='Nombre de la categoria'
                    onChange={(e)=>setCategoria({...Categoria,nombre: e.target.value})}/>

                    <label>Label</label>
                    <br/>
                    <input 
                    type="text" 
                    value={Categoria.label}
                    className='inputSectionProd'
                    placeholder='Presentación'
                    onChange={(e)=>setCategoria({...Categoria,label: e.target.value})}/>
                    <br/>
                    <label>Ruta</label>
                    <br/>
                    <input 
                    type="text" 
                    value={Categoria.ruta}
                    className='inputSectionProd'
                    placeholder='Presentación'
                    onChange={(e)=>setCategoria({...Categoria,ruta: e.target.value})}/>
                    <br/>
                    <label>Descripcion</label>
                    <br/>
                    <textarea placeholder='Descripción de la categoria'
                    className='textAreaProd'
                    value={Categoria.descripcion}
                    onChange={(e)=>setCategoria({...Categoria,descripcion:e.target.value})}></textarea>

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
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            />
                        </>
                )}
                </div>
                <br/>
                <br/>
                
                
            

                <div className='sectionSubmitProd'>
                    
                    <button className='buttonSubmitProd'
                    onClick={()=>handleSubmit(Categoria)}>
                        {obj ? "Editar categoria" : "Crear categoria"}
                    </button>
                </div>
                
                </section>
                
            </section>
            
        </article>


        </>
    )
}

export default SetCategoria