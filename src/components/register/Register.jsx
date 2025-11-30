import './Register.css'
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import LoginCard from '../loginCard/loginCard';
import { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Register(){

    const { registrar } = useUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        password: '',
        apellido: '', // Este campo no está en tu modelo de BD, lo gestionaremos
        dni: '',
        confirmPassword: ''
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleRegister = async () => {
        setError(null);
        
        if (formData.password !== formData.confirmPassword) {
            return setError('Las contraseñas no coinciden.');
        }

        setLoading(true);

    const dataToSend = {
            nombre: `${formData.nombre} ${formData.apellido}`, // Concatenamos Nombre y Apellido si el backend solo espera 'nombre'
            correo: formData.correo,
            password: formData.password,
            dni: formData.dni,
            img: 'default.png',         
            estado: true,               
            fechaRegistro: new Date(),
            rol: 'cliente'              
    };

    const result = await registrar(dataToSend);
    setLoading(false);

    if (result.success) {
            alert('¡Registro exitoso! Serás redirigido.');
            navigate('/misordenes'); 
        } else {
            setError(result.message || 'Error desconocido al registrar.');
        }
    };
    
    return(
        <>
            <Header /> 
            <NavBar />
            <LoginCard>
                
                <h2 id="title">Registro</h2>
                
                <form id="registerForm" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>

                    <div id="register">
                        {/* INPUT NOMBRE */}
                        <div className="field">
                            <p>Nombre</p>
                            <input 
                                id="nombre" 
                                type="text" 
                                placeholder="Tu nombre" 
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        {/* INPUT APELLIDO */}
                        <div className="field">
                            <p>Apellido</p>
                            <input 
                                id="apellido" 
                                type="text" 
                                placeholder="Tu apellido" 
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* INPUT CORREO */}
                        <div className="field">
                            <p>Correo</p>
                            <input 
                                id="correo" 
                                type="email" 
                                placeholder="usuario@gmail.com" 
                                value={formData.correo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        {/* INPUT DNI */}
                        <div className="field">
                            <p>DNI</p>
                            <input 
                                id="dni" 
                                type="text" 
                                placeholder="DNI" 
                                value={formData.dni}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        {/* INPUT CONTRASEÑA */}
                        <div className="field">
                            <p>Contraseña</p>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="Contraseña" 
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* INPUT CONFIRMAR CONTRASEÑA */}
                        <div className="field">
                            <p>Confirmar contraseña</p>
                            <input 
                                id="confirmPassword" 
                                type="password" 
                                placeholder="Confirma contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <br></br>
                    
                    {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

                    <button id='registerButton' type='submit' disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrarme'}
                    </button>
                </form>

            </LoginCard>
            <Footer />
        </>
    )
}

export default Register