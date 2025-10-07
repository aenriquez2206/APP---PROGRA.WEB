import './DashAdmin.css'
import ButtonDisplay from './buttonDisplay'
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

    return(
        <>
        <main>
            <span id="dashboardTitle" ><h1>Dashboard</h1></span>
            <section id="buttonDisplaySection" >
                {
                    objetos.map((objeto)=>{
                        return (
                            <ButtonDisplay {...objeto}/>
                        )
                    })
                }
            </section>
            


        </main>
        </> 
    )
}

export default DashAdmin