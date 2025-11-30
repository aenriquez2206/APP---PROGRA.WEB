import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { clearAuthData } from '../../utils/authUtils.js'

/**
 * AuthGuard - Componente que monitorea cambios de ruta
 * Si sales de /admin, cierra automáticamente la sesión de admin
 */
export const AuthGuard = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        // Si sales de /admin (estás en otra ruta), cierra sesión de admin
        if (!location.pathname.startsWith('/admin')) {
            console.log(`AuthGuard: Saliendo de admin → ${location.pathname}`)
            console.log('AuthGuard: Cerrando sesión de administrador...')
            
            // Limpiar datos de autenticación
            clearAuthData()
            
            // Limpiar también en contexto/localStorage específicamente
            localStorage.removeItem('token')
            localStorage.removeItem('usuario')
            
            console.log('AuthGuard: ✅ Sesión de admin cerrada')
        }
    }, [location.pathname])

    return children
}

export default AuthGuard
