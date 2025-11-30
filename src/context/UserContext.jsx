import { createContext, useState, useContext, useEffect } from 'react'
import authApi from '../api/auth.js'

const UserContext = createContext()

export function UserProvider({ children }) {

    const initialUser = JSON.parse(localStorage.getItem('usuario')) || null;
    const initialToken = localStorage.getItem('token') || null;

    const [ user, setUser ] = useState(initialUser)
    const [ token, setToken] = useState(initialToken)

    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const login = async (correo, password) => {

        try {
        
            const resultado = await authApi.login({correo, password});

            console.log({resultado});

            if (resultado.success) {
            
                const { token, usuario } = resultado;
                
                setUser(usuario);
                setToken(token);
                localStorage.setItem("usuario", JSON.stringify(usuario));
                localStorage.setItem("token", token);
                
                return resultado;
        } 
       
        return resultado; 

        } catch (error) {
            
            console.error("Error en el login del Contexto:", error);
    
            return { 
                success: false, 
                message: error.message || "Error de red o servidor no disponible." 
            };
        }
    }

    const registrar = async (userData) => {
    try {

        const resultado = await authApi.registrar(userData); 

        if (resultado.success) {
            const { token, usuario } = resultado;
            setUser(usuario);
            setToken(token);
            localStorage.setItem("usuario", JSON.stringify(usuario)); 
            localStorage.setItem("token", token);
        } 
        
        return resultado;
        
    } catch (error) {
        return { 
            success: false, 
            message: error.message || "Error de red al intentar registrar." 
        };
    }
}

    const logout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('usuario')
        localStorage.removeItem('token')
    }

    const isAuthenticated = !!token && !!user;

    const value = {
        user,
        token,
        isLoading,
        isAuthenticated,
        login,
        logout,
        registrar
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser () {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    return context;
}