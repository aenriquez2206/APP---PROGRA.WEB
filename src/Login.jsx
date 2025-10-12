import './Login.css'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import LoginCard from './components/loginCard/loginCard';

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

                    <button id='loginButton'>Iniciar sesión</button>

                    <p id="reg"><a href=''>Registrarme</a></p>

                    <p id="olv"><a href=''>Olvidé mi contraseña</a></p>
            </LoginCard>
            <Footer />
        </>
    )
}

export default Login