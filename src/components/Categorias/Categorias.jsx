import './Categorias.css'
import { Link } from 'react-router-dom'
import CategoriaItem from '../CategoriaItem/CategoriaItem'
import categoriasApi from '../../api/categoriasApi'

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
