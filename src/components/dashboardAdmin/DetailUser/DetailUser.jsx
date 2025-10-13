import './DetailUser.css'
import usuariosApi from '../../../api/usuariosApi';
import {useState} from 'react'
import Paginacion from '../../Paginacion/Paginacion';
const DetailUser =({user})=>{

    if (!user) {
        return (
            <article className="detalleUsuario">
                <h3>Selecciona un usuario para ver sus detalles</h3>
            </article>
        );
    }

    const pedidos = usuariosApi.obtenerPedidosUsuarios(user.id);
    
    //paginacion tabla de ordenes

    const totalOrdenes = pedidos.length;
    const [paginaActualOrden, setPaginaActualOrden] = useState(1);
    const OrdenesxPagina = 6;
    const TotalPaginasOrdenes = Math.ceil(totalOrdenes / OrdenesxPagina);

    const indexUltimaOrden = paginaActualOrden * OrdenesxPagina;
    const indexPrimeraOrden = indexUltimaOrden - OrdenesxPagina;
    const OrdenesActuales = pedidos.slice(indexPrimeraOrden, indexUltimaOrden);


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
                                <tr>
                                    <td className='colorPedidoTabla'>#{pedido.idp}</td>
                                    <td>{pedido.fecha}</td>
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
