import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay'
import usuariosApi from '../../api/usuariosApi'
import UserRow from '../../components/userRow/UserRow'
import Pagination from '../Pagination/Pagination'
import { useState, useEffect, use } from 'react'

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

    const [usuarios, setUsuarios] = useState([]);
    const [usuariosPagina, setUsuariosPagina] = useState([]);
    
    useEffect(() => {
        const usersInit = usuariosApi.get();
        setUsuarios(usersInit);
        setUsuariosPagina(usersInit.slice(0,6))
    },[]);
    


   

    return(
        <>
        <main>
            <div id="dashboardTitle" ><h1>Dashboard</h1></div>
            <section id="buttonDisplaySection" >
                {
                    objetos.map((objeto)=>{
                        return (
                            <ButtonDisplay {...objeto}/>
                        )
                    })
                }
            </section>
            <section id="sectionUsuarios">
                <section className="contendedoresDetallesUsuarios">
                    <div id="headerSectionUsuarios">
                        <span><h3>Usuarios registrados</h3></span>
                        <button id="buttonVerUsuarios">
                            <img  src="" alt="img"/>
                            <span><strong>Ver todos los usuarios </strong></span>
                        </button>
                    </div>
                    <table className="userTable">
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
                                        <UserRow {...usuario}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Pagination 
                        items ={usuarios}
                        itemsPerPage={6}
                        onPageChange={setUsuariosPagina}
                        />
                </section>
                <section class="contendedoresDetallesUsuarios">
                    <span><h3>Detalle de Usuario</h3></span>
                    <article class="detalleUsuario">
                        <div>
                            <div class="" >
                                <h2>Nombre</h2>
                                <p>Correo: ejemplo@gmail.pe</p>
                                <p>Fecha de registro: </p>
                                <p>Estado</p>
                            </div>
                            <div>
                                <img src="" alt="imagen"/>
                            </div>
                        </div>
                            
                            <table className='userTable'>
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>


                                </tbody>
                            </table>
                    </article>
                </section>
            </section>


        </main>
        </> 
    )
}

export default DashAdmin