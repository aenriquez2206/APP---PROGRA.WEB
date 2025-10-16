import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay/buttonDisplay'
import usuariosApi from '../../api/usuariosApi'
import pedidosApi from '../../api/ordenesApi'
import UserRow from './userRow/UserRow'
import DetailUser from './DetailUser/DetailUser'
import Paginacion from '../Paginacion/Paginacion'

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
    const [recargar,SetRecarga] = useState(false);

    //paginacion usuarios
    const totalUsuarios = usuariosApi.get().length;
    const [paginaActualUser, setPaginaActualUser] = useState(1);
    const usuariosxPagina = 6;
    const totalPaginasUsers = Math.ceil(totalUsuarios / usuariosxPagina);

    const indexUltimoUser = paginaActualUser * usuariosxPagina;
    const indexPrimerUser = indexUltimoUser - usuariosxPagina;
    const usuariosActuales = usuarios.slice(indexPrimerUser, indexUltimoUser);


    //paginacion listado de ordenes

    const totalOrdenes = pedidos.length;
    const [paginaActualOrden, setPaginaActualOrden] = useState(1);
    const OrdenesxPagina = 4;
    const TotalPaginasOrdenes = Math.ceil(totalOrdenes / OrdenesxPagina);

    const indexUltimaOrden = paginaActualOrden * OrdenesxPagina;
    const indexPrimeraOrden = indexUltimaOrden - OrdenesxPagina;
    const OrdenesActuales = pedidos.slice(indexPrimeraOrden, indexUltimaOrden);

    
    
    
    //ACTUALIZAR EL NAVIGATE USUARIOS
    const handleNavigateUsuarios =()=>{
        navigate('/admin/users')
    }

    const handleNavigateProductos =()=>{
        navigate('/admin/productos')
    }

    //ACTUALIZAR  EL NAVIGATE ORDENES
    const handleNavigateOrdenes =()=>{
        navigate('/admin/orders')
    }

    const handleUserDetail =(id)=>{
        const newUser = usuarios.find((user) => user.id === id);
        setUserDetail(newUser);
    }

    useEffect(() => {
        const usersInit = usuariosApi.get();
        setUsuarios(usersInit);
    },[recargar]);

    const handleRecargaUsuarios = () => {
        setRecargar(prev => !prev); 
    }
 
    


   

    return(
        <>
        <main className='mainAdmin'>
            

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
                            <img  src="/itemsAssets/list.png" alt="img"/>
                            <div><strong>Ver todos los usuarios </strong></div>
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
                                usuariosActuales.map((usuario)=>{
                                    return(
                                        <UserRow user={usuario} OnClick={handleUserDetail}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Paginacion totalPaginas={totalPaginasUsers} paginaActual={paginaActualUser} setPaginaActual={setPaginaActualUser}/>
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
                            <img src="/itemsAssets/list.png" alt="img"/>
                            <div>Ver productos</div>
                        </button>
                        <button className='buttonOrdenesSection'
                        onClick={()=>handleNavigateOrdenes()}>
                            <img src="/itemsAssets/list.png" alt="img"/>
                            <div>Ver Todas las ordenes</div>
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
                            OrdenesActuales.map((pedido)=>{
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
                <Paginacion totalPaginas={TotalPaginasOrdenes} paginaActual={paginaActualOrden} setPaginaActual={setPaginaActualOrden}/>
            </section>

        </main>
        </> 
    )
}

export default DashAdmin