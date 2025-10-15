import '../login/Login.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function LgnBttn({children})
{
    return(
        <button id='loginButton' type='submit'>{children}</button>
    )
}

function Login(){

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() == 'admin@gameplay.com' && password.trim() == 'admin') {
      navigate('/admin');
    }
  };

    return(
        <>
            <Header /> 

            <NavBar />

            <LoginCard>
                <h2 id="title">Iniciar sesión</h2>
                
                    <form id='loginForm' onSubmit={handleLogin}>

                    <p>Correo</p>
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="usuario@gmail.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    required/>

                    <p>Contraseña</p>
                    <input 
                    id="pword" 
                    type="password" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>

                    <br></br>

                    <LgnBttn onClick={handleLogin}>Iniciar sesión</LgnBttn>
                    
                    </form>

                    <p id="reg"><a href='/register'>Registrarme</a></p>

                    <p id="olv"><a href='/forgot'>Olvidé mi contraseña</a></p>
            </LoginCard>

            <Footer />
        </>
    )
}

export default Login