import {Link} from 'react-router-dom'
import './ProductoCard.css'


const ProductoCard = ({ producto }) => {
    const { nombre, categoria, precio, img } = producto; 

    return (
        <Link to={`/producto/${producto.id}`} className="producto-card-link">
        <div className="producto-card">
            <div className="producto-img-container">
                <img src={img} alt={nombre} className="producto-imagen" />
            </div>
            
            <div className="producto-info">
                <h3 className="producto-titulo">{nombre}</h3>
                <p className="producto-categoria">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>       
                <div className="producto-precio">S/ {precio}</div>         
                <button className="producto-boton-agregar">AGREGAR</button>
            </div>
        </div>
        </Link>
    );
};

export default ProductoCard;
