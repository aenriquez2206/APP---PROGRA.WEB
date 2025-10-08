import './UserRow.css'
import { useState } from 'react'

const UserRow =(props)=>{

    const [estado,setEstado] = useState(props.estado);('Desactivar')
    const handleEstado =()=>{
        if(estado === true){
            setEstado(false)
        }
        else{
            setEstado(true)
        }
        
    }

    return(
        <>
        <tr>
            <td>
                <div>
                    <img src={props.img} alt="img"/>
                    <span>{props.nombre}</span>
                </div>
            </td>
            <td >
                <div 
                className={estado ?'estadoActivo' :'estadoInactivo' }>
                    {estado ? 'Activo' :'Inactivo'}
            
                </div>
            </td>
            <td id="accionesButton">
                <button id="buttonDesactivar" onClick={()=>handleEstado()}>{estado ?'Activar':'Desactivar'}</button>
                <button id="buttonDetalle">Ver detalle</button>
            </td>
        </tr>    
        </>
    )
}


export default UserRow