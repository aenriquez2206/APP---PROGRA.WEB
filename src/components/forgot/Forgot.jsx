import './Forgot.css'
import React, { useState } from 'react';
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';
import {useNavigate} from 'react-router-dom';
import authApi from '../../api/auth';

function Forgot(){

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);     
    const [loading, setLoading] = useState(false);

    const handleRecoverySubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
       
        const response = await authApi.findUserByEmail(email); 

        if (response.success && response.user && response.user.id) {
            
            localStorage.setItem('recoveryUserId', response.user.id);
            
            localStorage.setItem('recoveryUserEmail', response.user.correo);

            navigate('/change'); 
            
        } else {
            setError('No se encontró ninguna cuenta asociada a ese correo electrónico.');
        }

        } catch (err) {
            
            const errorMessage = err.data?.message || err.message || "Error de conexión. Intenta de nuevo más tarde.";

            setError(errorMessage);
            
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                
                <h2 id="title">Olvidé mi contraseña</h2>
                
                {error && <div style={{ color: 'red', marginBottom: '15px', fontWeight: 'bold' }}>{error}</div>}

                <form onSubmit={handleRecoverySubmit}>

                <p>Se enviará un enlace a tu correo electrónico para que puedas validar tu identidad y reestablecer
                    tu contraseña.<br></br>
                    Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.
                </p>

                <h4>Correo</h4>
                <input 
                    id="email" 
                    type="email" 
                    placeholder='usuario@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />

                <br></br>

                <button id='forgotButton' type='submit' disabled={loading}>
                    {loading ? 'Buscando usuario...' : 'Enviar'}
                </button>

                </form>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Forgot