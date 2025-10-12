import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay/buttonDisplay'
import usuariosApi from '../../api/usuariosApi'
import pedidosApi from '../../api/ordenesApi'
import UserRow from './userRow/UserRow'
import Pagination from '../Pagination/Pagination'
import DetailUser from './DetailUser/DetailUser'

import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const DashAdmin =()=>{

    const objetos =[
    {
        titulo: "Órdenes",
        valor:8
    },
    {
        titulo:"Usuarios nuevos",
        valor:12
    },
    {
        titulo:"Ingresos totales",
        valor:"S/.10,000.00"
    }
    
    ]

    const user1 = usuariosApi.get()[0]
    const navigate =useNavigate()
    const [usuarios, setUsuarios] = useState([]);
    const [usuariosPagina, setUsuariosPagina] = useState([]);
    const [userDetail, setUserDetail] = useState(user1)
    const pedidos = pedidosApi.get();

    

    
    
    //ACTUALIZAR EL NAVIGATE USUARIOS
    const handleNavigateUsuarios =()=>{
        navigate('/')
    }

    const handleNavigateProductos =()=>{
        navigate('/admin/productos')
    }

    //ACTUALIZAR  EL NAVIGATE ORDENES
    const handleNavigateOrdenes =()=>{
        navigate('/')
    }

    const handleUserDetail =(id)=>{
        const newUser = usuarios.find((user) => user.id === id);
        setUserDetail(newUser);
    }

    useEffect(() => {
        const usersInit = usuariosApi.get();
        setUsuarios(usersInit);
        setUsuariosPagina(usersInit.slice(0,6))
    },[]);

    useEffect(()=>{

    },[userDetail])
    


   

    return(
        <>
        <main>
            <div className="dashboardTitle" ><h1>Dashboard</h1></div>
            <section className="buttonDisplaySection" >
                {
                    objetos.map((objeto)=>{
                        return (
                            <ButtonDisplay {...objeto}/>
                        )
                    })
                }
            </section>
            <section className="sectionUsuarios">
                
                <section className="contendedoresDetallesUsuarios">
                    <div className="headerSectionUsuarios">
                        <span><h3>Usuarios registrados</h3></span>
                        <button className="buttonVerUsuarios" onClick={()=>handleNavigateUsuarios()}>
                            <img  src="" alt="img"/>
                            <span><strong>Ver todos los usuarios </strong></span>
                        </button>
                    </div>
                    <table className="generalTable">
                        <thead>
                            <tr >
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuariosPagina.map((usuario)=>{
                                    return(
                                        <UserRow user={usuario} OnClick={handleUserDetail}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    
                </section>

                <section className="contendedoresDetallesUsuarios">
                    <span><h3>Detalle de Usuario</h3></span>
                    <DetailUser user={userDetail}/>
                </section>
            </section>
            
            <section className='ordenesSection'>
                <section className="encabezadoOrdenesSection">
                    <div><h3>Listado de Ordenes</h3></div>
                    <div className='sectionButtonsOrdenes'>
                        <button onClick={()=>handleNavigateProductos()}className='buttonOrdenesSection'>
                            <img src="" alt="img"/>
                            <span>Ver productos</span>
                        </button>
                        <button className='buttonOrdenesSection'>
                            <img src="" alt="img"/>
                            <span>Ver Todas las ordenes</span>
                        </button>
                    </div>
                </section>
                <table className='generalTable'>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Usuario</th>
                            <th>Fecha de Orden</th>
                            <th>Total</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map((pedido)=>{
                                return(
                                    <tr>
                                        <td>{pedido.id}</td>
                                        <td>{pedido.usuario}</td>
                                        <td>{pedido.fechaOrden}</td>
                                        <td>{pedido.total}</td>
                                        <td>{pedido.estado ?'Entregado' : 'No Entregado'}</td>
                                    </tr>
                                )
                            })

                        }

                            
                    </tbody>
                </table>
            </section>

        </main>
        </> 
    )
}

export default DashAdmin