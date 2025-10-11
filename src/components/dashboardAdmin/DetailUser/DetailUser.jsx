import './DetailUser.css'
import usuariosApi from '../../../api/usuariosApi';
const DetailUser =({user})=>{

    if (!user) {
        return (
            <article className="detalleUsuario">
                <h3>Selecciona un usuario para ver sus detalles</h3>
            </article>
        );
    }

    const pedidos = usuariosApi.obtenerPedidosUsuarios(user.id);
    
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
                        <img src={user.img} alt="imagen"/>
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
                            pedidos.map((pedido) => (
                                <tr>
                                    <td className='colorPedidoTabla'>#{pedido.idp}</td>
                                    <td>{pedido.fecha}</td>
                                    <td>{pedido.total}</td>
                                </tr>
                            ))
                        }
                        

                    </tbody>
                </table>
            </article>
        
        </>


    )

}

export default DetailUser
