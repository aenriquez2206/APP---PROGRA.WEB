import {Link} from 'react-router-dom'
import './ProductoCard.css'


const ProductoCard = ({ producto }) => {
    return (
        <Link to={`/producto/${producto.id}`} className="producto-card-link">
        <div className="producto-card">
            <div className="producto-img-container">
                <img src={producto.img} alt={producto.nombre} className="producto-imagen" />
            </div>
            
            <div className="producto-info">
                <h3 className="producto-titulo">{producto.nombre}</h3>
                <div className="producto-precio">S/{producto.precio}</div>         
                <button className="producto-boton-agregar">AGREGAR</button>
            </div>
        </div>
        </Link>
    );
};

export default ProductoCard;
