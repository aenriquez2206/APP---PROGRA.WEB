import { Navigate } from 'react-router-dom';
import { isAuthenticated, isAdmin } from '../../utils/authUtils';

/**
 * Componente para proteger rutas que requieren autenticación
 */
export const ProtectedRoute = ({ children, requiredRole = null }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && requiredRole === 'admin' && !isAdmin()) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
