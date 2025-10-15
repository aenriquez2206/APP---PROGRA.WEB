import './Banner.css'
import hell from '../../assets/hell.jpeg'
import dying from '../../assets/dying.jpg'
import Card from '../Card/Card'

const Banner = () => {

  const destacados = [
    {
      id: 1,
      titulo: "Hell is Us | Deluxe Edition (PC)",
      plataforma: "Steam Key - GLOBAL",
      precio: 69.99,
      descuento: 37,
      img: hell
    },
    {
      id: 2,
      titulo: "Dying Light: The Beast (PC)",
      plataforma: "Steam Account - GLOBAL",
      precio: 29.99,
      descuento: 50,
      img: dying
    }
  ]

  return (
    <div>
      <div className="banner-section">
      <div className="banner-container">
        {destacados.map((item) => (
          <Card
            key={item.id}
            titulo={item.titulo}
            plataforma={item.plataforma}
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