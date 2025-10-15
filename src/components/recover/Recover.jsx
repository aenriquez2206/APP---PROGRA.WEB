import '../login/Login.css'

import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';

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