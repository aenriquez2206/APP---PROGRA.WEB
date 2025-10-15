import './DetalleUsuarios.css'

const Boton = () => {
  return (
      <td>
        <button>Ver Detalle</button>
      </td>
  );
};


const DUsuario = ({Usuarios, Ordenes}) => {
  return (
    <main className='maindetalleusuario'>
      <div className="Titulo">
        <div>
          <h2> Detalles de usuario</h2>
        </div>
        <div>
          <button className="CContra">Cambiar Contraseña</button>
        </div>
      </div>
      <div className="card">
        <div className="Principal">
              {Usuarios.filter((u,i) => i == 0)
              .map((u) =>  (
                <>
                  <div>
                    <h1>{u.nombre + " "}</h1>
                    <p><b>Correo: </b> <u>{u.correo + " "}</u></p>
                    <p><b>Fecha de registro: </b>{u.fecha + " "}</p>
                    <p><b>Estado:</b> {u.estadoC + " "}</p>
                  </div>
                  <div>
                    <img src={u.foto} alt="foto1" width="12px" />
                  </div>
                </>
                  ))}
        </div>
          <p><b>Últimas órdenes</b></p>
          
          <table className='tabla_DU'>
            <thead>
              <th>#ID</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Acciones</th>
            </thead>
            <tbody>
              {Ordenes.filter(o => o.nombre == Usuarios[0].nombre)
                .map((o, i) => (
                  <tr key={i}>
                    <td className="Id_Orden"><b><u>{o.id}</u></b></td>
                    <td>{o.fechaO}</td>
                    <td>{o.total}</td>
                    <Boton />
                  </tr>
                ))}
            </tbody>
          </table>
      </div>  
      
    </main>
  );
};


export default DUsuario
