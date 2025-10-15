import React from "react";
import "./CambiarContraseña.css";

const CambiarContraseña = () => {
  return (
    <div className="cambiar-container">
      <div className="cambiar-card">
        <h2>Cambiar contraseña</h2>

        <div className="campo">
          <label>Antigua contraseña</label>
          <div className="input-wrapper">
            <input type="password" placeholder="Contraseña" />
            <span className="icono-ojo">👁️</span>
          </div>
        </div>

        <div className="campo">
          <label>Nueva contraseña</label>
          <div className="input-wrapper">
            <input type="password" placeholder="Contraseña" />
            <span className="icono-ojo">👁️</span>
          </div>
        </div>

        <div className="campo">
          <label>Repetir contraseña</label>
          <div className="input-wrapper">
            <input type="password" placeholder="Contraseña" />
            <span className="icono-ojo">👁️</span>
          </div>
        </div>

        <button className="btn-cambiar">Cambiar contraseña</button>
      </div>
    </div>
  );
};

export default CambiarContraseña;
