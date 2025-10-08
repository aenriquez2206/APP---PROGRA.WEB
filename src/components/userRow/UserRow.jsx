import './UserRow.css'

const UserRow =(props)=>{
    return(
        <>
        <tr>
            <td>
                <div>
                    <img src={props.img} alt="img"/>
                    <span>{props.nombre}</span>
                </div>
            </td>
            <td>{props.estado}</td>
            <td>
                <button>Desactivar</button>
                <button>Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow