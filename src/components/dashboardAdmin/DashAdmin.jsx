import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay/buttonDisplay'
import pedidosApi from '../../api/ordenesApi'
import UserRow from './userRow/UserRow'
import DetailUser from './DetailUser/DetailUser'
import Paginacion from '../Paginacion/Paginacion'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import usuariosApi from '../../api/auth.js'
import ordenesAPi from '../../api/ordenesApi.js'
const DashAdmin =()=>{
    
    

    const [user1,setUser1] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [rawUsers, setRawUsers] =useState([]);
    const [orders, setOrders] =useState([]);

    const handleOnLoad =async()=>{
        const rawuser = await usuariosApi.findOne(1);
        setUser1(rawuser);
        const allUsers = await usuariosApi.findAll();
        const user = await usuariosApi.findOne(1);
        const raworders = await ordenesAPi.findAll()
        setRawUsers(allUsers)
        setUsuarios(allUsers)
        setUser1(user)
        setOrders(raworders)
    }
    useEffect(()=>{
        handleOnLoad()
    },[])
    // Calcula ingresos totales (suma de `total` de cada orden). Protege tipos.
    const calculateTotalIncome = (ordersArray) => {
        if (!Array.isArray(ordersArray)) return 0
        return ordersArray.reduce((acc, orden) => {
            // Aceptar varias posibles claves y convertir a número
            const t = orden?.total ?? orden?.totalPedido ?? orden?.totalAmount ?? 0
            const n = Number(t)
            return acc + (isNaN(n) ? 0 : n)
        }, 0)
    }

    // Cuenta usuarios registrados en los últimos 30 días
    const countNewUsersLast30Days = (usersArray) => {
        if (!Array.isArray(usersArray)) return 0
        const now = new Date()
        const past = new Date(now)
        past.setDate(now.getDate() - 30)
        return usersArray.filter(u => {
            const dateStr = u?.fechaRegistro ?? u?.fecha_registro ?? u?.createdAt ?? u?.created_at ?? u?.created
            if (!dateStr) return false
            const d = new Date(dateStr)
            if (isNaN(d)) return false
            return d >= past && d <= now
        }).length
    }

    const ingresosTotales = calculateTotalIncome(orders)
    const usuariosNuevosUltimoMes = countNewUsersLast30Days(rawUsers)

    const objetos = [
        { titulo: 'Órdenes', valor: orders.length },
        { titulo: 'Usuarios nuevos', valor: usuariosNuevosUltimoMes },
        { titulo: 'Ingresos totales', valor: ingresosTotales.toFixed(2) }
    ]

    const navigate =useNavigate()
    
    const [userDetail, setUserDetail] = useState(user1)
    const [recargar,SetRecarga] = useState(false);

    //paginacion usuarios
    const totalUsuarios = rawUsers.length;
    const [paginaActualUser, setPaginaActualUser] = useState(1);
    const usuariosxPagina = 6;
    const totalPaginasUsers = Math.ceil(totalUsuarios / usuariosxPagina);

    const indexUltimoUser = paginaActualUser * usuariosxPagina;
    const indexPrimerUser = indexUltimoUser - usuariosxPagina;
    const usuariosActuales = usuarios.slice(indexPrimerUser, indexUltimoUser);


    //paginacion listado de ordenes

    const totalOrdenes = orders.length;
    const [paginaActualOrden, setPaginaActualOrden] = useState(1);
    const OrdenesxPagina = 4;
    const TotalPaginasOrdenes = Math.ceil(totalOrdenes / OrdenesxPagina);

    const indexUltimaOrden = paginaActualOrden * OrdenesxPagina;
    const indexPrimeraOrden = indexUltimaOrden - OrdenesxPagina;
    const OrdenesActuales = orders.slice(indexPrimeraOrden, indexUltimaOrden);

    
    
    
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

    const handleUserDetail =async (id)=>{
        const newUser = await usuariosApi.findOne(id);
        setUserDetail(newUser);
    }

    useEffect(() => {
        handleOnLoad()
        setUsuarios(rawUsers);
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
                    objetos.map((objeto) => (
                        <ButtonDisplay key={objeto.titulo} {...objeto} />
                    ))
                }
            </section>
            <section className="sectionUsuarios">
                
                <section className="contendedoresDetallesUsuarios">
                    <div className="headerSectionUsuarios">
                        <span><h3>Usuarios registrados</h3></span>
                        <button className="buttonVerUsuarios" onClick={handleNavigateUsuarios}>
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
                                usuariosActuales.map((usuario) => (
                                    <UserRow
                                        key={usuario.id ?? usuario._id ?? usuario.correo}
                                        user={usuario}
                                        fecha={false}
                                        OnClick={handleUserDetail}
                                    />
                                ))
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
                            <th>#ORDEN</th>
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
                                        <td>{pedido.idp}</td>
                                        <td>{pedido.usuario?.nombre}</td>
                                        <td>{typeof pedido.fecha ==="string" ? pedido.fecha.slice(0,10):""}</td>
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