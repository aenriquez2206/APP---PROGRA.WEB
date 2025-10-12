import './Login.css'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import LoginCard from './components/loginCard/loginCard';

function Recover(){

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                <h2 id="title">Recuperar contraseña</h2>
                
                    <p>Nueva contraseña</p>
                    <input id="pword" type="password" placeholder="Contraseña"></input>

                    <p>Repetir contraseña</p>
                    <input id="pword" type="password" placeholder="Contraseña"></input>

                    <br></br>

                    <button id='loginButton'>Cambiar contraseña</button>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Recover