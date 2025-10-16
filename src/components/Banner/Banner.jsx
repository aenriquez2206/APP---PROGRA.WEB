import './Banner.css'
import productosApi from '../../api/productosApi'
import Card from '../Card/Card'

const Banner = () => {

  const todosLosProductos = productosApi.get() 
  const productosDestacados = todosLosProductos.slice(0, 2)

  return (
    <div>
      <div className="banner-section">
        <div className="banner-container">
          {productosDestacados.map((item) => (
            <Card
              key={item.id}
              titulo={item.nombre}
              plataforma={item.presentacion} 
              precio={item.precio}
              descuento={item.descuento}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner