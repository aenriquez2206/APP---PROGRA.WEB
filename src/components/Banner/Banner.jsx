import './Banner.css'
import productosApi from '../../api/productosApi'
import Card from '../Card/Card'
import {useState,useEffect} from 'react'

const Banner = () => {
    const [todosLosProductos,setTodosLosProductos] = useState([])
    
    const handleOnLoad = async () =>{
        const rawproductos = await productosApi.findAll();
        setTodosLosProductos(rawproductos);
    }

    useEffect(() => {
        handleOnLoad()
    }, [])
    

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
