import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import ListadoCategoriasAdminComponent from "../components/pagListadoCategoriasAdmin/ListadoCategoriasAdmin.jsx"
import Footer from "../components/footer/Footer.jsx"

const ListadoCategoriasAdmin =() =>{
    return(<>
        <Header/>
        <NavBar/>
        <ListadoCategoriasAdminComponent/>
        <Footer/>
    </>)
}


export default ListadoCategoriasAdmin