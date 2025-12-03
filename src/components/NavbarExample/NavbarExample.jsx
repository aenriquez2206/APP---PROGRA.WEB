import { useNavigate } from 'react-router-dom';
import { getStoredUser, clearAuthData, isAuthenticated } from '../../utils/authUtils.js';

/**
 * Ejemplo de Navbar con funcionalidad de autenticación
 * Muestra el nombre del usuario y botón de logout
 */
const NavbarExample = () => {
  const navigate = useNavigate();
  const usuario = getStoredUser();
  const autenticado = isAuthenticated();

  const handleLogout = () => {
    clearAuthData();
    navigate('/login');
  };

  const handleGoToAdmin = () => {
    if (usuario?.rol === 'admin' || usuario?.rol === 'Admin') {
      navigate('/admin');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Mi Tienda</a>
        </div>

        <ul className="nav-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/carrito">Carrito</a></li>
          
          {autenticado ? (
            <>
              {/* Si es admin, mostrar enlace al dashboard */}
              {(usuario?.rol === 'admin' || usuario?.rol === 'Admin') && (
                <li>
                  <button onClick={handleGoToAdmin} className="btn-admin">
                    Dashboard Admin
                  </button>
                </li>
              )}

              {/* Mostrar nombre del usuario */}
              <li className="user-info">
                <span>Hola, {usuario?.nombre}</span>
              </li>

              {/* Botón de logout */}
              <li>
                <button onClick={handleLogout} className="btn-logout">
                  Cerrar Sesión
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Si no está autenticado, mostrar botón de login */}
              <li>
                <a href="/login" className="btn-login">
                  Iniciar Sesión
                </a>
              </li>
              <li>
                <a href="/register" className="btn-register">
                  Registrarse
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarExample;
