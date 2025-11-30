import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import {useUser} from '../../context/UserContext';

const ProtectedRoute = ({ allowedRoles }) => {

    const { user, token, isAuthenticated, isLoading } = useUser(); 
    
    if (isLoading) {
        return <div>Verificando sesión...</div>;
    }

    if (!isAuthenticated) { 
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && allowedRoles.length > 0) {
    
        if (!user || !user.rol || !allowedRoles.includes(user.rol)) {
            return <Navigate to="/" replace />; 
        }
    }
    
    return <Outlet />; 
};

export default ProtectedRoute;
