const key ="ordenes_data"
let pedidos = JSON.parse(localStorage.getItem(key))||[
     {
    id: 845,
    usuario: "Alejandra Ruiz",
    fechaOrden: "01/10/2025",
    total: 150,
    estado: true
  },
  {
    id: 392,
    usuario: "Carlos Mendoza",
    fechaOrden: "05/10/2025",
    total: 220,
    estado: false
  },
  {
    id: 517,
    usuario: "Lucía Fernández",
    fechaOrden: "10/10/2025",
    total: 310,
    estado: true
  },
  {
    id: 274,
    usuario: "Diego Salazar",
    fechaOrden: "15/10/2025",
    total: 180,
    estado: true
  },
  {
    id: 689,
    usuario: "Valeria Torres",
    fechaOrden: "20/10/2025",
    total: 270,
    estado: false
  },
  {
    id: 921,
    usuario: "Martín Herrera",
    fechaOrden: "02/10/2025",
    total: 195,
    estado: true
  },
  {
    id: 134,
    usuario: "Camila Rojas",
    fechaOrden: "03/10/2025",
    total: 260,
    estado: false
  },
  {
    id: 758,
    usuario: "Andrés Gutiérrez",
    fechaOrden: "04/10/2025",
    total: 330,
    estado: true
  },
  {
    id: 483,
    usuario: "Paula Morales",
    fechaOrden: "06/10/2025",
    total: 145,
    estado: true
  },
  {
    id: 872,
    usuario: "Fernando Díaz",
    fechaOrden: "07/10/2025",
    total: 200,
    estado: false
  },
  {
    id: 316,
    usuario: "Sofía Aguilar",
    fechaOrden: "08/10/2025",
    total: 175,
    estado: true
  },
  {
    id: 940,
    usuario: "Javier Castillo",
    fechaOrden: "09/10/2025",
    total: 295,
    estado: true
  },
  {
    id: 227,
    usuario: "Natalia Campos",
    fechaOrden: "11/10/2025",
    total: 250,
    estado: false
  },
  {
    id: 695,
    usuario: "Rodrigo Pérez",
    fechaOrden: "12/10/2025",
    total: 310,
    estado: true
  },
  {
    id: 519,
    usuario: "Gabriela Soto",
    fechaOrden: "13/10/2025",
    total: 160,
    estado: false
  },
  {
    id: 808,
    usuario: "Héctor Lozano",
    fechaOrden: "14/10/2025",
    total: 275,
    estado: true
  },
  {
    id: 442,
    usuario: "Daniela Vega",
    fechaOrden: "16/10/2025",
    total: 230,
    estado: false
  },
  {
    id: 611,
    usuario: "Esteban Paredes",
    fechaOrden: "17/10/2025",
    total: 340,
    estado: true
  },
  {
    id: 954,
    usuario: "María Castillo",
    fechaOrden: "18/10/2025",
    total: 210,
    estado: true
  },
  {
    id: 383,
    usuario: "Ignacio León",
    fechaOrden: "19/10/2025",
    total: 185,
    estado: false
  },
  {
    id: 705,
    usuario: "Claudia Navarro",
    fechaOrden: "21/10/2025",
    total: 260,
    estado: true
  },
  {
    id: 567,
    usuario: "Ricardo Fuentes",
    fechaOrden: "22/10/2025",
    total: 300,
    estado: false
  },
  {
    id: 800,
    usuario: "Patricia Ramírez",
    fechaOrden: "23/10/2025",
    total: 240,
    estado: true
  },
  {
    id: 248,
    usuario: "Sebastián Torres",
    fechaOrden: "24/10/2025",
    total: 280,
    estado: false
  },
  {
    id: 629,
    usuario: "Laura Espinoza",
    fechaOrden: "25/10/2025",
    total: 320,
    estado: true
  }

]


let contador =pedidos.length;

const guardarEnLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(pedidos));
};

const insert = (pedido) => {
    pedido.id = ++contador;
    pedidos.push(pedido);
    guardarEnLocalStorage();
};

const get = () => pedidos;



const pedidosApi = { insert, get };
export default pedidosApi;