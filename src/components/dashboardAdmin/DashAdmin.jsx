import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay'
import usuariosApi from '../../api/usuariosApi'
import UserRow from '../../components/userRow/UserRow'


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

    const usuarios = usuariosApi.get();



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
                <div class="contendedoresDetallesUsuarios">
                    <div id="headerSectionUsuarios">
                        <span><h3>Usuarios registrados</h3></span>
                        <button id="buttonVerUsuarios">
                            <img  src="" alt="img"/>
                            <span><strong>Ver todos los usuarios </strong></span>
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario)=>{
                                    return(
                                        <UserRow {...usuario}/>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="contendedoresDetallesUsuarios">
                    <span><h3>Detalle de Usuario</h3></span>
                    
                </div>
            </section>


        </main>
        </> 
    )
}

export default DashAdmin