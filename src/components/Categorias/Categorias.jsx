import './Categorias.css'
import { Link } from 'react-router-dom'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
import categoriasApi from '../../api/categoriasApi'
import metal from '/productosAssets/metal.jpeg'
import ps5 from '/productosAssets/ps5.jpeg'
import perifericos from '/productosAssets/audifonos.webp'
import pokemones from '/productosAssets/pokemones.jpg'

const Categorias =()=>{
    const categoriasCompletas = categoriasApi.get()
    
    const categoriasMostradas = categoriasCompletas.filter(categoria => 
        categoria.id >= 1 && categoria.id <= 4
    );

    return(
        <div>
            <br />
            <div className= "categorias-seccion">
                <h1 id = "categorias">Explora las Categorias</h1>
                <div className= "categorias-contenedor">
                    <div className = "flecha-izq">
                        {'<'}
                    </div>
                    {categoriasMostradas.map((categoria) => (
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
