import '../login/Login.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from '../../api/auth';

function Change(){

    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChangePassword = async (e) => {
        e.preventDefault(); 
        setError(null);
        setSuccessMessage(null);
        
        const recoveryUserId = localStorage.getItem('recoveryUserId');

        if (!recoveryUserId) {
        return setError('Error: No se encontró el ID de recuperación. Intente el flujo de nuevo.');
        }

        if (newPassword !== confirmPassword) {
            return setError('La nueva contraseña y la repetición no coinciden.');
        }

        if (newPassword.length < 6) {
             return setError('La nueva contraseña debe tener al menos 6 caracteres.');
        }
        
        try {
            const response = await authApi.resetPassword({
                userId: recoveryUserId,
                newPassword
            });

            if (response.success) {
                setSuccessMessage('Contraseña cambiada con éxito. Serás redirigido en 3 segundos.');
                
                setTimeout(() => {
                    navigate('/login'); 
                }, 3000);
            } else {
                setError(response.message || 'Error desconocido al cambiar la contraseña.');
            }

        } catch (err) {
            console.error(err);
            setError(err.message || 'Error de conexión con el servidor.');
        }
    };

    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                <h2 id="title">Cambiar contraseña</h2>

                    {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
                    {successMessage && <div style={{ color: 'green', marginBottom: '15px' }}>{successMessage}</div>}

                    <form onSubmit={handleChangePassword}>
                    
                    <p>Antigua contraseña</p>
                    <input 
                        id="pword" 
                        type="password" 
                        placeholder="Contraseña antigua"
                        value={oldPassword} 
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />

                    <p>Nueva contraseña</p>
                    <input 
                        id="pword1" 
                        type="password" 
                        placeholder="Nueva Contraseña"
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />

                    <p>Repetir contraseña</p>
                    <input 
                        id="pword2" 
                        type="password" 
                        placeholder="Repetir Contraseña"
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <br/>

                    <button id='changeButton' type='submit'>Cambiar contraseña</button>
                    </form>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Change;