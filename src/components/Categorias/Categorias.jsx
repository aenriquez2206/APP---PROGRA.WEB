import './Categorias.css'
import { Link } from 'react-router-dom'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
import categoriasApi from '../../api/categoriasApi'
import { useState, useEffect } from 'react'

const Categorias =()=>{
    const [todasLasCategorias, setTodasLasCategorias] = useState([])

    const handleOnLoad = async () => {
        const rawcategorias = await categoriasApi.findAll()
        setTodasLasCategorias(rawcategorias)
    }

    useEffect(()=>{
        handleOnLoad()
    }, [])

    return(
        <div>
            <br />
            <div className= "categorias-seccion">
                <h1 id = "categorias">Explora las Categorias</h1>
                <div className= "categorias-contenedor">
                    <div className = "flecha-izq">
                        {'<'}
                    </div>
                    {todasLasCategorias.slice(0,4).map((categoria) => (
                        <Link 
                            key={categoria.id} 
                            to={`/catalogo/${categoria.ruta}`} 
                            className="categoria-link" 
                        >
                            <CategoriaItem
                                nombre={categoria.nombre}
                                img={categoria.img}
                            />
                        </Link>
                    ))}
                    <div className="flecha-der">{'>'}</div>
                </div>
            </div>
        </div>
    )
}

export default Categorias
