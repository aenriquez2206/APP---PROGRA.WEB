import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import DetalleUsuarioComponent from "../components/pagDetalleUsuario/DetalleUsuario.jsx"
import Footer from "../components/footer/Footer.jsx"

const DetalleUsuario =() =>{
    return(<>
        <Header/>
        <NavBar/>
        <DetalleUsuarioComponent/>
        <Footer/>
    </>)
}


export default DetalleUsuario