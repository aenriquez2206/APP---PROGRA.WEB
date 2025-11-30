import '../MisOrdenes/MisOrdenes.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import ListaO from '../Listado_Ordenes/ListadoOrdenes';

function MisOrdenes()
{
    return(
    <>
        <Header/>
        <NavBar/>
        <h1 id='saludo'>Hola Usuario!</h1>
        <span id='dpde'>
            <div id='dp'>
                <h2>Datos personales</h2>
                <p>Nombre: Nombre</p>
                <p>Correo: correo@correo.com</p>
                <p>Fecha de registro: DD/MM/YY</p>
            </div>
            <div id='de'>
                <h2>Dirección de envio</h2>
                <p>Dirección: Dirección</p>
                <p>Departamento - Ciudad</p>
                <p>Celular de contacto: 000000000</p>
            </div>
            <div id='ordmaho'>
                <div id='ord'>
                    <span>
                    <div>Ordenes</div>
                    <div>XXX</div>
                    </span>
                </div>
                <br></br>
                <div id='maho'>
                    <span>
                    <div>Monto ahorrado</div>
                    <div>S/XXX</div>
                    </span>
                </div>
            </div>
            <div>
                <img id='fusuario' src='src\components\fotos\foto1.jpg'></img>
            </div>
        </span>
        <ListaO/>
    </>)
}

export default MisOrdenes