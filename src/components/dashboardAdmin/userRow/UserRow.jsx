import './UserRow.css'
import { useState } from 'react'
import usuariosApi from '../../../api/usuariosApi'

const UserRow =({user,OnClick})=>{

    const [estado,setEstado] = useState(user.estado)
    

     const handleEstado =(ID)=>{
        usuariosApi.actualizarEstado(ID,!estado)
        setEstado(usuariosApi.obtenerEstado(ID))
    }
  

    return(
        <>
        <tr >
            <td  onClick={()=>OnClick(user.id)} >
                <div className='nombreTable'>
                    <img className='imagenNombreTable' src={user.img} alt="img"/>
                    <span>{user.nombre}</span>
                </div>
            </td>
            <td >
                <div 
                className={estado ?'estadoActivo' :'estadoInactivo' }>
                    {estado ? 'Activo' :'Inactivo'}
            
                </div>
            </td>
            <td className="accionesButton">
                <button className="buttonDesactivar" onClick={()=>handleEstado(user.id)}>{estado ?'Desactivar':'Activar'}</button>
                <button className="buttonDetalle">Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow