import './UserRow.css'
import { useState } from 'react'
import usuariosApi from '../../api/usuariosApi'

const UserRow =(props)=>{

    const [estado,setEstado] = useState(props.estado)
    const handleEstado1=(ID)=>{
        setEstado(!estado)
    }

     const handleEstado =(ID)=>{
        usuariosApi.actualizarEstado(ID,!estado)
        setEstado(usuariosApi.obtenerEstado(ID))
    }
  

    return(
        <>
        <tr>
            <td>
                <div className='nombreTable'>
                    <img className='imagenNombreTable' src={props.img} alt="img"/>
                    <span>{props.nombre}</span>
                </div>
            </td>
            <td >
                <div 
                className={estado ?'estadoActivo' :'estadoInactivo' }>
                    {estado ? 'Activo' :'Inactivo'}
            
                </div>
            </td>
            <td className="accionesButton">
                <button className="buttonDesactivar" onClick={()=>handleEstado(props.id)}>{estado ?'Activar':'Desactivar'}</button>
                <button className="buttonDetalle">Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow