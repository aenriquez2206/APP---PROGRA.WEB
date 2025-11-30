import './DetailUser.css'
import ordenesApi from '../../../api/ordenesApi';
import usuariosApi from '../../../api/auth'
import {useState,useEffect} from 'react'
import Paginacion from '../../Paginacion/Paginacion';
const DetailUser =({user})=>{
        console.log("Hola mi user id es : ",typeof user)
        console.log("Usuario es indefinod: ",user === undefined)
    const pedidoDefault =[
        {
        id: 1,
        fecha: "2025-11-30T12:53:53.467Z",
        idp: 1001,
        total: 234.99
        },
        {
        id: 2,
        fecha: "2025-11-30T12:53:53.467Z",
        idp: 1003,
        total: 234.99
        },
    ]

    if (!user) {
        return (
            <article className="detalleUsuario">
                <h3>Selecciona un usuario para ver sus detalles</h3>
            </article>
        );
    }

    const [pedidos,setPedidos] =useState([])
    const handleOnLoad = async () => {
        console.log("handleOnLoad - user type:", typeof user)
        console.log("handleOnLoad - user is undefined:", user === undefined)
        try {
            if (!user) {
                setPedidos(pedidoDefault)
                return
            }

            // Obtener el usuario completo y su id de forma segura
            const userResp = await usuariosApi.findOne(user.id)
            const id_user = userResp?.id ?? user.id
            console.log('userResp', userResp, 'id_user', id_user)

            const rawPedidos = await ordenesApi.findOne(id_user)
            console.log('rawPedidos (respuesta):', rawPedidos, 'isArray:', Array.isArray(rawPedidos))

            // Normalizar la respuesta a un Array seguro
            let pedidosArray = []
            if (Array.isArray(rawPedidos)) {
                pedidosArray = rawPedidos
            } else if (rawPedidos && Array.isArray(rawPedidos.data)) {
                pedidosArray = rawPedidos.data
            } else if (rawPedidos && Array.isArray(rawPedidos.pedidos)) {
                pedidosArray = rawPedidos.pedidos
            } else if (rawPedidos && Array.isArray(rawPedidos.rows)) {
                pedidosArray = rawPedidos.rows
            } else if (rawPedidos && typeof rawPedidos === 'object' && Object.keys(rawPedidos).length > 0) {
                // Si la API devuelve un único objeto de pedido, conviértelo en array
                pedidosArray = [rawPedidos]
            } else {
                pedidosArray = []
            }

            setPedidos(pedidosArray)
        } catch (err) {
            console.error('Error cargando pedidos en DetailUser:', err)
            setPedidos([])
        }
    }

    useEffect(()=>{
        handleOnLoad()
    },[user])


    
    //paginacion tabla de ordenes

    const totalOrdenes = pedidos.length;
    const [paginaActualOrden, setPaginaActualOrden] = useState(1);
    const OrdenesxPagina = 6;
    const TotalPaginasOrdenes = Math.ceil(totalOrdenes / OrdenesxPagina);

    const indexUltimaOrden = paginaActualOrden * OrdenesxPagina;
    const indexPrimeraOrden = indexUltimaOrden - OrdenesxPagina;
    const OrdenesActuales = Array.isArray(pedidos) ? pedidos.slice(indexPrimeraOrden, indexUltimaOrden) : [];


    return (
        <>
            <article className="detalleUsuario">
                <div className="headerDetalleUsuario">
                    <div>
                        <h2>Nombre: {user.nombre}</h2>
                        <p><strong>Correo:</strong>  {user.correo}</p>
                        <p><strong>Fecha de Registro: </strong> {user.fechaRegistro}: </p>
                        <p><strong>Estado: </strong> {user.estado ?"Activo":"Inactivo"}</p>
                    </div>
                    <div>
                        <img className='imgUserDetail'
                        src={user.img} alt="imagen"/>
                    </div>
                </div>
                    
                <table className='generalTable'>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Fecha</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            OrdenesActuales.map((pedido) => (
                                <tr key={pedido.id ?? pedido.idp}>
                                    <td className='colorPedidoTabla'>#{pedido.idp}</td>
                                    <td>{typeof pedido.fecha ==="string" ? pedido.fecha.slice(0,10):""}</td>
                                    <td>{pedido.total}</td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                </table>
                <Paginacion totalPaginas={TotalPaginasOrdenes} paginaActual={paginaActualOrden} setPaginaActual={setPaginaActualOrden}/>    
            </article>
        
        </>


    )

}

export default DetailUser
