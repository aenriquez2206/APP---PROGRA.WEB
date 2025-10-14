import './Login.css'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import LoginCard from './components/loginCard/loginCard';
import {useNavigate} from 'react-router-dom';

function LgnBttn({children})
{
    const navigate = useNavigate();
    return(
        <button id='loginButton' onClick={()=>navigate('/login')}>{children}</button>
    )
}

function Login(){

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                <h2 id="title">Iniciar sesión</h2>
                
                    <p>Correo</p>
                    <input id="email" type="email" value="usuario@gmail.com"></input>

                    <p>Contraseña</p>
                    <input id="pword" type="password" value="Contraseña"></input>

                    <br></br>

                    <LgnBttn>Iniciar sesión</LgnBttn>

                    <p id="reg"><a href='/register'>Registrarme</a></p>

                    <p id="olv"><a href='/forgot'>Olvidé mi contraseña</a></p>
            </LoginCard>
            <Footer />
        </>
    )
}

export default Login