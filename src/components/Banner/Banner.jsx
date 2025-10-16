import './Banner.css'
import productosApi from '../../api/productosApi'
import Card from '../Card/Card'

const Banner = () => {

    const todosLosProductos = productosApi.get() 

    return (
        <div>
            <div className="banner-section">
                <div className="banner-container">
                    {todosLosProductos.slice(0,2).map((item) => (
                        <Card
                            key={item.id}
                            producto={item} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
