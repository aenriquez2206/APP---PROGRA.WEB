/**
 * Utilidades para manejo de autenticación en el frontend
 */

export const getStoredToken = () => {
    return localStorage.getItem('token');
};

export const getStoredUser = () => {
    const userStr = localStorage.getItem('usuario');
    return userStr ? JSON.parse(userStr) : null;
};

export const saveAuthData = (token, usuario) => {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
};

export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrito'); // Opcionalmente limpiar el carrito también
};

export const isAuthenticated = () => {
    return !!getStoredToken();
};

export const redirectToLogin = () => {
    clearAuthData();
    window.location.href = '/login';
};

export const handleAuthError = (error) => {
    // Si es error 401 (token inválido o expirado)
    if (error?.status === 401 || error?.response?.status === 401) {
        redirectToLogin();
        return false;
    }
    return true;
};

export const isAdmin = () => {
    const user = getStoredUser();
    return user?.rol === 'admin' || user?.rol === 'Admin';
};

export const canAccessAdmin = () => {
    // Puramente comprueba si el usuario puede acceder a admin.
    // No realiza redirecciones aquí — los componentes deben hacerlo.
    if (!isAuthenticated()) {
        return false;
    }
    if (!isAdmin()) {
        return false;
    }
    return true;
};
