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
                <h2 id="title">Cambiar contraseña</h2>
                
                    <p>Antigua contraseña</p>
                    <input id="pword" type="password" placeholder="Contraseña"></input>

                    <p>Nueva contraseña</p>
                    <input id="pword1" type="password" placeholder="Contraseña"></input>

                    <p>Repetir contraseña</p>
                    <input id="pword2" type="password" placeholder="Contraseña"></input>

                    <br></br>

                    <button id='changeButton'>Cambiar contraseña</button>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Recover