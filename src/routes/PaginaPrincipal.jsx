import Header from "../components/header/Header"
import NavBar from "../components/navBar/NavBar"
import Footer from "../components/footer/Footer"
import Banner from "../components/Banner/Banner"
import Categorias from "../components/Categorias/Categorias"
import MasVendido from "../components/Masvendido/Masvendido"

const PaginaPrincipal = () =>{
    return(<>
        <Header />
        <NavBar />
        <Banner />
        <Categorias />
        <MasVendido />
        <Footer />
    </>)
}

export default PaginaPrincipal