import './UserRow.css'
import { useState,useEffect } from 'react'
import usuariosApi from '../../../api/auth.js'
import { useNavigate } from "react-router-dom";
const UserRow =({user,fecha,OnClick})=>{

    const [estado,setEstado] = useState(user.estado)
    const navigate = useNavigate()

    useEffect(() => {
        setEstado(user.estado);
    }, [user]); 
    
     const handleEstado =async (user)=>{
        //AGREGA FUNCION PARA ACUTUALIZA EL ESTADO
        const newestado = !user.estado
        user.estado = newestado
        await usuariosApi.update(user)
        setEstado(newestado)
    }


    const handleNavigateDetalle=()=>{
        navigate('/admin/detalle-usuario', { state: { usuario: user } })
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
            {
                fecha ? 
                <td>
                    {user.fecharegistro.slice(0,10)}
                </td>: null
            }
            <td >
                <div 
                className={estado ?'estadoActivo' :'estadoInactivo' }>
                    {estado ? 'Activo' :'Inactivo'}
            
                </div>
            </td>
            <td className="accionesButton">
                <button className="buttonDesactivar" onClick={()=>handleEstado(user)}>{estado ?'Desactivar':'Activar'}</button>
                <button className="buttonDetalle" onClick={()=>handleNavigateDetalle()}>Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow