import './UserRow.css'
import { useState } from 'react'
import usuariosApi from '../../../api/usuariosApi'
import { useNavigate } from "react-router-dom";
const UserRow =({user,OnClick})=>{

    const [estado,setEstado] = useState(user.estado)
    
    const navigate = useNavigate()
     const handleEstado =(ID)=>{
        usuariosApi.actualizarEstado(ID,!estado)
        setEstado(usuariosApi.obtenerEstado(ID))
    }

    const handleNavigateDetalle=()=>{
        navigate('/admin/detalle-usuario')
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
                <button className="buttonDesactivar" onClick={()=>handleEstado(user.id)}>{estado ?'Activar':'Desactivar'}</button>
                <button className="buttonDetalle"
                onClick={()=>handleNavigateDetalle()}>Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow