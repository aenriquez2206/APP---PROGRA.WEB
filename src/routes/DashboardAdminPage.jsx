import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import DashAdmin from "../components/dashboardAdmin/DashAdmin"
import Footer from "../components/footer/Footer"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { canAccessAdmin } from "../utils/authUtils.js"

const DashboardAdmin = () => {
    const navigate = useNavigate()

    // Validar autenticación ANTES de renderizar cualquier contenido
    useEffect(() => {
        if (!canAccessAdmin()) {
            navigate('/login', { replace: true })
        }
    }, [navigate])

    return(<>
        <Header/>
        <NavBar/>
        <DashAdmin/>
        <Footer/>
    </>)
}

export default DashboardAdmin