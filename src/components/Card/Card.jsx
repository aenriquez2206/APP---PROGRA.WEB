import './Card.css'

const Card = (props) => {
  const { titulo, plataforma, precio, descuento, img } = props

  const precioNormal = precio
  const precioRebajado = (precio * (1 - descuento / 100)).toFixed(2)

  return (
    <div className="card">
      <div
        className="card-background"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />

      <div className="card-info">
      
        <h2 className="card-title">{titulo}</h2>
        <p className="card-platform">{plataforma}</p>

        <div className="precio">
          <span className="precionuevo">€ {precioRebajado}</span>

          <span className="precioanterior">€ {precioNormal.toFixed(2)}</span>
          <span className="descuento">-{descuento}%</span>
          <br />
          <button className="botoncarrito">Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Card