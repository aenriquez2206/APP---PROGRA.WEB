import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ producto }) => {

    const precioNormal = Number(producto.precio) || 0;
    const descuento = Number(producto.descuento) || 0;
    const precioRebajado = (precioNormal * (1 - descuento / 100)).toFixed(2);
    return (
        <div className="card">
              <div
                    className="card-background"
                    style={{
                        backgroundImage: `url(${producto.img})`
                    }}
              />
            <div className="card-info">
                <h2 className="card-title">{producto.nombre}</h2>
                <p className="card-platform">{producto.presentacion}</p>
                <div className="precio">
                    <span className="precionuevo">S/. {precioRebajado}</span>
                    <span className="precioanterior">S/. {precioNormal.toFixed(2)}</span>
                    <span className="descuento">-{producto.descuento}%</span>
                    <br />
                    <Link to={`/producto/${producto.id}`} className="botoncarrito-link">
                        <button className="botoncarrito">
                            Añadir al carrito
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;
