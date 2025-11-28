import { createContext, useState, useContext } from 'react'
import authApi from '../api/auth.js'

const UserContext = createContext()

export function UserProvider({ children }) {
    const [ user, setUser ] = useState(null)
    const [ token, setToken] = useState(null)

    const login = async (usuario, password) => {

        const resultado = await authApi.login({usuario, password})

        console.log({resultado})

        if (resultado.success) {
            setUser(resultado)
            setToken(resultado.token)
            localStorage.setItem("usuario", JSON.stringify(resultado));
            return true;
        } else 
            return false;
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('usuario')
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser () {
    const context = useContext(UserContext)
    return context;
}