import '../login/Login.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useUser} from '../../context/UserContext';

function LgnBttn({children, disabled, ...props})
{
    return(
        <button id='loginButton' type='submit' disabled={disabled} {...props}>{children}</button>
    )
}

function Login(){

  const {login} = useUser(); 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    setError(null);
    setLoading(true);

    const result = await login(email, password); 
    setLoading(false);

    if (result.success) {
        
        const userRole = result.usuario.rol;
        
        if (userRole === 'admin') {
            navigate('/admin');
        } else {
            navigate('/misordenes');
        }
    } else {
        setError(result.message || 'Error desconocido al iniciar sesión. Verifique sus credenciales.');
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

                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <LgnBttn disabled={loading}>
                        {loading ? 'Verificando...' : 'Iniciar sesión'}
                    </LgnBttn>
                    
                    </form>

                    <p id="reg"><a href='/register'>Registrarme</a></p>

                    <p id="olv"><a href='/forgot'>Olvidé mi contraseña</a></p>
            
            </LoginCard>

            <Footer />
        </>
    )
}

export default Login