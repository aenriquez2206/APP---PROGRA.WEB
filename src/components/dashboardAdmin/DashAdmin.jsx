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
import { useUser } from '../../context/UserContext';
import { handleAuthError, isAuthenticated, isAdmin } from '../../utils/authUtils.js'

const DashAdmin = () => {

    const navigate = useNavigate()
    const { logout } = useUser();
    const [user1, setUser1] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [rawUsers, setRawUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAccessDenied, setIsAccessDenied] = useState(false);

    // Validar acceso admin INMEDIATAMENTE al cargar - Simula recarga de página
    useEffect(() => {
        console.log('DashAdmin: Verificando acceso admin');
        console.log('¿Autenticado?', isAuthenticated());
        console.log('¿Es Admin?', isAdmin());
        
        if (!isAuthenticated()) {
            console.log('DashAdmin: Usuario no autenticado');
            setIsAccessDenied(true);
            setTimeout(() => navigate('/login', { replace: true }), 100);
            return;
        }

        if (!isAdmin()) {
            console.log('DashAdmin: Usuario no es admin');
            setIsAccessDenied(true);
            setTimeout(() => navigate('/', { replace: true }), 100);
            return;
        }

        console.log('DashAdmin: Acceso permitido');
        setIsAccessDenied(false);
    }, [navigate]);

    const handleOnLoad = async () => {
        // Validar nuevamente antes de cargar datos
        if (!isAuthenticated() || !isAdmin()) {
            console.log('DashAdmin: Validación fallida al cargar datos');
            setIsAccessDenied(true);
            navigate('/login', { replace: true });
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            const allUsers = await usuariosApi.findAll();
            const raworders = await ordenesAPi.findAll()
            
            // Obtener el primer usuario de la lista
            const firstUser = Array.isArray(allUsers) ? allUsers[0] : (allUsers?.data?.[0] ?? {});
            
            setRawUsers(allUsers)
            setUsuarios(allUsers)
            setUser1(firstUser)
            setUserDetail(firstUser)
            setOrders(raworders)
        } catch (err) {
            console.error('Error al cargar datos:', err);
            if (!handleAuthError(err)) {
                return; // Ya fue redirigido a login
            }
            setError(err?.message || 'Error al cargar los datos');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleOnLoad()
    }, [])
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
    
    const [userDetail, setUserDetail] = useState(null)
    const [recargar, SetRecarga] = useState(false);

    //paginacion usuarios
    const totalUsuarios = rawUsers.length;
    const [paginaActualUser, setPaginaActualUser] = useState(1);
    const usuariosxPagina = 6;
    const totalPaginasUsers = Math.ceil(totalUsuarios / usuariosxPagina);

    const indexUltimoUser = paginaActualUser * usuariosxPagina;
    const indexPrimerUser = indexUltimoUser - usuariosxPagina;
    const usuariosActuales = Array.isArray(usuarios) ? usuarios.slice(indexPrimerUser, indexUltimoUser) : [];


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

    const handleUserDetail = async (id) => {
        try {
            const newUser = await usuariosApi.findOne(id);
            setUserDetail(newUser);
        } catch (err) {
            console.error('Error al obtener detalles del usuario:', err);
            if (!handleAuthError(err)) {
                return; // Ya fue redirigido
            }
            setError('No se pudo cargar los detalles del usuario');
        }
    }

    useEffect(() => {
        handleOnLoad()
        setUsuarios(rawUsers);
    },[recargar]);

    const handleRecargaUsuarios = () => {
        setRecargar(prev => !prev); 
    }
 
    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true }); 
    };


    return(
        <>
        <main className='mainAdmin'>
            
            {/* Si acceso es denegado, no mostrar nada */}
            {isAccessDenied && (
                <div style={{ padding: '40px', textAlign: 'center' }}>
                    <p style={{ color: '#c00', fontSize: '18px', fontWeight: 'bold' }}>
                        Acceso denegado. Redirigiendo...
                    </p>
                </div>
            )}
            
            {!isAccessDenied && loading && (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <p>Cargando datos del dashboard...</p>
                </div>
            )}

            {!isAccessDenied && error && (
                <div style={{ 
                    padding: '20px', 
                    backgroundColor: '#fee', 
                    color: '#c00', 
                    marginBottom: '20px',
                    borderRadius: '4px'
                }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {!isAccessDenied && !loading && (
            <>
            <div 
                className="dashboardTitle" 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    marginRight: '40px'
                }}
            >
                <h1>Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className="buttonVerUsuarios" 
                    style={{ 
                        backgroundColor: '#dc3545', 
                        height: '40px',
                    }}
                >
                    <div><strong>Cerrar sesión</strong></div>
                </button>
            </div>
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
            </>
            )}

        </main>
        </> 
    )
}

export default DashAdmin