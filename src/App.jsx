
import './App.css'



function App() {


  return (
    <>
      
    </>
  )
}



export default App
/* 



import './App.css'
import Header from './components/header/Header'
import NavBar from './components/navBar/NavBar'
import ListaUsuarios from './components/lista_usuarios/ListaUsuarios'
import DetalleUsuarios from './components/detalle_usuario/DetalleUsuarios'
import ListaOrdenes from './components/Listado_Ordenes/ListadoOrdenes' 
import DetalleOrden from './components/Detalles_Orden/DetalleOrden'

import foto1 from './components/fotos/foto1.jpg';
import foto2 from './components/fotos/foto2.jpg';
import foto3 from './components/fotos/foto3.jpg';

import juego1 from './components/fotos/Mario_Kart.jpg';
import juego2 from './components/fotos/2k26.jpg';
import juego3 from './components/fotos/Gengar.jpg';
import juego4 from './components/fotos/MGS_Delt.jpg';
import juego5 from './components/fotos/NS_Joy.jpg';
import juego6 from './components/fotos/Auriculares_PC.jpg';


const Usuarios_L = [{ foto: foto1, nombre: "Juan Perez", correo: "juan.perez@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1234" },
                    { foto: foto2, nombre: "María Gonzales", correo: "maria.gonzales@gmail.com", fecha: "20/01/2025", estadoC: "Inactivo", ID: "1235" },
                    { foto: foto3, nombre: "Marco Aurelio", correo: "marco.aurelio@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1236" },
                    { foto: foto2, nombre: "Ana Días", correo: "ana.dias@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1237" },
                    { foto: foto1, nombre: "Juan Perez", correo: "juan.perez@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1238" },
                    { foto: foto2, nombre: "María Gonzales", correo: "maria.gonzales@gmail.com", fecha: "20/01/2025", estadoC: "Inactivo", ID: "1239" },
                    { foto: foto3, nombre: "Marco Aurelio", correo: "marco.aurelio@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1240" },
                    { foto: foto2, nombre: "Ana Días", correo: "ana.dias@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1241" },
                    { foto: foto1, nombre: "Juan Perez", correo: "juan.perez@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1242" },
                    { foto: foto2, nombre: "María Gonzales", correo: "maria.gonzales@gmail.com", fecha: "20/01/2025", estadoC: "Inactivo", ID: "1243" },
                    { foto: foto3, nombre: "Marco Aurelio", correo: "marco.aurelio@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1244" },
                    { foto: foto2, nombre: "Ana Días", correo: "ana.dias@gmail.com", fecha: "20/01/2025", estadoC: "Activo", ID: "1245" },
                    { foto: foto3, nombre: "Marco Aurelio", correo: "marco.aurelio@gmail.com", fecha: "20/01/2025", estadoC: "Inactivo", ID: "1246" }
                  ];

const Ordenes_L = [{ id: "#1234", nombre: "Juan Perez", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1235", nombre: "María Gonzales", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Por entregar" },
                   { id: "#1236", nombre: "Marco Aurelio", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1237", nombre: "Ana Días", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1238", nombre: "Juan Perez", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1239", nombre: "María Gonzales", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Por entregar" },
                   { id: "#1240", nombre: "Marco Aurelio", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1241", nombre: "Ana Días", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1242", nombre: "Juan Perez", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1243", nombre: "María Gonzales", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Por entregar" },
                   { id: "#1244", nombre: "Marco Aurelio", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1245", nombre: "Ana Días", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Entregado" },
                   { id: "#1246", nombre: "Marco Aurelio", fechaO: "20/01/2025", total: "S/199.00", estadoO: "Por entregar" }
                  ];

const Productos_L = [
  {
    foto: juego1,
    id_orden: "#1234",
    id: "#0223",
    nombre: "Mario Kart",
    categoria: "Videojuegos",
    cantidad: 10,
    total: "S/19.00",
    
  },
  {
    foto: juego2,
    id_orden: "#1234",
    id: "#6425",
    nombre: "2K26",
    categoria: "Videojuegos",
    cantidad: 4,
    total: "S/19.00",
    
  },
  {
    foto: juego3,
    id_orden: "#1234",
    id: "#2344",
    nombre: "Nintendo Switch with Joy",
    categoria: "Consola",
    cantidad: 4,
    total: "S/19.00",
    
  },
  {
    foto: juego4,
    id_orden: "#1234",
    id: "#4344",
    nombre: "Jazwares Pokemon Gengar 24",
    categoria: "Coleccionable",
    cantidad: 12,
    total: "S/19.00",
    
  },
  {
    foto: juego5,
    id_orden: "#1234",
    id: "#5454",
    nombre: "METAL GEAR SOLID DELT",
    categoria: "Videojuegos",
    cantidad: 1,
    total: "S/19.00",
    
  },
  {
    foto: juego6,
    id_orden: "#1234",
    id: "#8123",
    nombre: "Auriculares PC",
    categoria: "Periférico",
    cantidad: 1,
    total: "S/19.00",
    
  }
];

//<ListaUsuarios Usuarios={Usuarios_L}/>
//<DetalleUsuarios Usuarios={Usuarios_L} Ordenes={Ordenes_L}/>
//<ListaOrdenes Ordenes={Ordenes_L} Usuarios={Usuarios_L}/>
//<DetalleOrden Ordenes={Ordenes_L} Productos={Productos_L}/>


function App() {


  return (
    <>
      <Header/>
      <NavBar/>
      <DetalleOrden Ordenes={Ordenes_L} Productos={Productos_L}/>
    </>
  )
}

export default App
 */