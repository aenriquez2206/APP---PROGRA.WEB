import './Forgot.css'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import LoginCard from './components/loginCard/loginCard';
import {useNavigate} from 'react-router-dom';

function FgtBttn({children})
{
    const navigate = useNavigate();
    return(
        <button id='forgotButton' onClick={()=>navigate('/change')}>{children}</button>
    )
}

function Forgot(){

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                
                <h2 id="title">Olvidé mi contraseña</h2>
                
                <p>Se enviará un enlace a tu correo electrónico para que puedas validar tu identidad y reestablecer
                    tu contraseña.<br></br>
                    Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.
                </p>

                <h4>Correo</h4>
                <input id="email" type="email" placeholder='usuario@gmail.com'></input>

                <br></br>

                <FgtBttn>Recuperar contraseña</FgtBttn>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Forgot