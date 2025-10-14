import './Register.css'
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import LoginCard from './components/loginCard/loginCard';

function Register(){

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                
                <h2 id="title">Registro</h2>
                
                <div id="register">

                    <div className="field">
                        <p>Nombre</p>
                        <input id="name" type="text" placeholder="Nombre del usuario" />
                    </div>
                    
                    <div className="field">
                        <p>Correo</p>
                        <input id="email" type="email" placeholder="usuario@gmail.com" />
                    </div>

                    <div className="field">
                        <p>Contraseña</p>
                        <input id="pword" type="password" placeholder="Contraseña" />
                    </div>

                    <div className="field">
                        <p>Apellido</p>
                        <input id="surname" type="text" placeholder="Nombre del usuario" />
                    </div>

                    <div className="field">
                        <p>DNI</p>
                        <input id="DNI" type="text" placeholder="DNI" />
                    </div>

                    <div className="field">
                        <p>Confirmar contraseña</p>
                        <input id="pword2" type="password" placeholder="Contraseña" />
                    </div>

                </div>

                <br></br>

                <button id='registerButton'>Registrarme</button>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Register