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