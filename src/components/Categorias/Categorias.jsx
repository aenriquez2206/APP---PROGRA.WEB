import './Categorias.css'
import { Link } from 'react-router-dom'
import CategoriaItem from '../CategoriaItem/CategoriaItem'

import metal from '../../assets/metal.jpeg'
import ps5 from '../../assets/ps5.jpeg'
import perifericos from '../../assets/audifonos.webp'
import pokemones from '../../assets/pokemones.jpg'

const categoriasData = [
    { id: 1, nombre: "Videojuegos", img: metal, ruta: "videojuegos" },
    { id: 2, nombre: "Consolas", img: ps5, ruta: "consolas" },
    { id: 3, nombre: "Periféricos", img: perifericos, ruta: "perifericos" },
    { id: 4, nombre: "Coleccionables", img: pokemones, ruta: "coleccionables" }
]

const Categorias =()=>{
    return(
        <div>
            <br />
            <div className= "categorias-seccion">
                <h1 id = "categorias">Explora las Categorias</h1>
                <div className= "categorias-contenedor">
                    <div className = "flecha-izq">
                        {'<'}
                    </div>
                    {categoriasData.map((categoria) => (
                        <Link 
                            key={categoria.id} 
                            to={`/categorias/${categoria.ruta}`} 
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
