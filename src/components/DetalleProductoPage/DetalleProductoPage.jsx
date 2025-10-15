import { useParams, Link } from 'react-router-dom'
import './DetalleProductoPage.css'
import { ProductosCompletos } from '../../components/CatalogoPage/CatalogoPage'
import ProductoCard from '../../components/ProductoCard/ProductoCard'

const CardSlider = ({ title, productos }) => {
    if (productos.length === 0) return null;

    return (
        <div className="slider-container">
            <h3>{title}</h3>
            <div className="slider-content">
                {productos.map(producto => (
                    <Link 
                        key={producto.id} 
                        to={`/producto/${producto.id}`} 
                    >
                        <ProductoCard producto={producto} />
                    </Link>
                ))}
            </div>
        </div>
    );
}


const DetalleProductoPage = () => {
    const { id } = useParams(); 
    const productId = parseInt(id, 10);

    const producto = ProductosCompletos.find(p => p.id === productId);

    if (!producto) {
        return (
            <div className="detalle-layout">
                <p className="not-found">Producto no encontrado con ID: {id}</p>
                <Link to="/catalogo" className="volver-link">Volver al Catálogo</Link>
            </div>
        );
    }
    
    const productosSimilares = ProductosCompletos
        .filter(p => p.id !== productId && p.categoria === producto.categoria)
        .slice(0, 4);

    return (
        <div className="detalle-layout">
            <nav className="breadcrumb">
                <Link to="/">Inicio</Link> &gt; 
                <Link to={`/catalogo/${producto.categoria}`}>{producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</Link> &gt; 
                {producto.nombre}
            </nav>
            
            <div className="detalle-principal">
                <div className="detalle-imagen">
                    <img 
                        src={producto.img} 
                        alt={producto.nombre} 
                    />
                </div>
                <div className="detalle-info">
                    <h1 className="detalle-titulo">{producto.nombre}</h1>
                    
                    {producto.descripcion && (
                        <p className="detalle-descripcion">
                            {producto.descripcion}
                        </p>
                    )}
                    <p className="detalle-precio">S/ {producto.precio.toFixed(2)}</p> 
                    <button className="detalle-btn-agregar">AGREGAR AL CARRITO</button>
                    
                    <div className="detalle-specs">
                        {producto.genero && <span>Género: {producto.genero}</span>}
                    </div>
                </div>
            </div>
            
            {productosSimilares.length > 0 && (
                <CardSlider 
                    title="Productos Similares" 
                    productos={productosSimilares}
                />
            )}
        </div>
    );
}

export default DetalleProductoPage;
