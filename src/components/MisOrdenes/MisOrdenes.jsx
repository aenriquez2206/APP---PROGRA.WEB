import '../MisOrdenes/MisOrdenes.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import ListaO from '../Listado_Ordenes/ListadoOrdenes';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function MisOrdenes()
{

    const { user, logout } = useUser();
    const navigate = useNavigate();

    const nombreUsuario = user ? user.nombre : "Usuario";
    const correoUsuario = user ? user.correo : "correo@correo.com";

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    
    return(
    <>
        <Header/>
        <NavBar/>
        <div className="misOrdenesHeader" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0 40px',
            marginTop: '20px' 
        }}>
            {}
            <h1 id='saludo'>Hola {nombreUsuario}!</h1>
            
            {}
            <button 
                onClick={handleLogout} 
                style={{ 
                    padding: '10px 15px', 
                    backgroundColor: '#dc3545', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '16px'
                }}
            >
                Cerrar sesión
            </button>
        </div>
        <span id='dpde'>
            <div id='dp'>
                <h2>Datos personales</h2>
                <p>Nombre: {nombreUsuario}</p>
                <p>Correo: {correoUsuario}</p>
                <p>Fecha de registro: {user ? user.fecha_registro : "DD/MM/YY"}</p>
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
        <ListaO userId={user ? user.id : null}/>
    </>)
}

export default MisOrdenes