const key ="usuarios_data"
let usuarios = JSON.parse(localStorage.getItem(key))||[
  {
    id: 1,
    img: "/userAssets/image 25.png",
    nombre: "Ariel Enriquez",
    estado: true,
    correo: "ariel@gmail.com",
    fechaRegistro: "01/10/2025",
    pedidos: [
      { idp: "P001", fecha: "01/10/2025", total: 150 },
      { idp: "P002", fecha: "05/10/2025", total: 220 },
      { idp: "P003", fecha: "10/10/2025", total: 180 },
      { idp: "P004", fecha: "15/10/2025", total: 250 },
      { idp: "P005", fecha: "20/10/2025", total: 310 },
      { idp: "P006", fecha: "25/10/2025", total: 270 }
    ]
  },
  {
    id: 2,
    img: "/userAssets/image 25.png",
    nombre: "Helmut Saker",
    estado: true,
    correo: "helmut@gmail.com",
    fechaRegistro: "02/10/2025",
    pedidos: [
      { idp: "P101", fecha: "03/10/2025", total: 190 },
      { idp: "P102", fecha: "07/10/2025", total: 210 },
      { idp: "P103", fecha: "11/10/2025", total: 175 },
      { idp: "P104", fecha: "14/10/2025", total: 300 },
      { idp: "P105", fecha: "19/10/2025", total: 230 },
      { idp: "P106", fecha: "23/10/2025", total: 260 }
    ]
  },
  {
    id: 3,
    img: "/userAssets/image 25.png",
    nombre: "Rodrigo Thompson",
    estado: true,
    correo: "rodrigo@gmail.com",
    fechaRegistro: "03/10/2025",
    pedidos: [
      { idp: "P201", fecha: "04/10/2025", total: 120 },
      { idp: "P202", fecha: "08/10/2025", total: 140 },
      { idp: "P203", fecha: "12/10/2025", total: 190 },
      { idp: "P204", fecha: "17/10/2025", total: 280 },
      { idp: "P205", fecha: "21/10/2025", total: 330 },
      { idp: "P206", fecha: "26/10/2025", total: 200 }
    ]
  },
  {
    id: 4,
    img: "/userAssets/image 25.png",
    nombre: "Sebastian Valverde",
    estado: true,
    correo: "sebastian.valverde@gmail.com",
    fechaRegistro: "04/10/2025",
    pedidos: [
      { idp: "P301", fecha: "05/10/2025", total: 250 },
      { idp: "P302", fecha: "09/10/2025", total: 270 },
      { idp: "P303", fecha: "13/10/2025", total: 290 },
      { idp: "P304", fecha: "18/10/2025", total: 310 },
      { idp: "P305", fecha: "22/10/2025", total: 350 },
      { idp: "P306", fecha: "27/10/2025", total: 375 }
    ]
  },
  {
    id: 5,
    img: "/userAssets/image 25.png",
    nombre: "Sebastian Diaz",
    estado: true,
    correo: "sebastian.diaz@gmail.com",
    fechaRegistro: "05/10/2025",
    pedidos: [
      { idp: "P401", fecha: "06/10/2025", total: 210 },
      { idp: "P402", fecha: "10/10/2025", total: 260 },
      { idp: "P403", fecha: "14/10/2025", total: 240 },
      { idp: "P404", fecha: "19/10/2025", total: 300 },
      { idp: "P405", fecha: "23/10/2025", total: 320 },
      { idp: "P406", fecha: "28/10/2025", total: 280 }
    ]
  },
  {
    id: 6,
    img: "/userAssets/image 25.png",
    nombre: "Nehemias Falcon",
    estado: true,
    correo: "nehemias@gmail.com",
    fechaRegistro: "06/10/2025",
    pedidos: [
      { idp: "P501", fecha: "07/10/2025", total: 180 },
      { idp: "P502", fecha: "11/10/2025", total: 230 },
      { idp: "P503", fecha: "15/10/2025", total: 260 },
      { idp: "P504", fecha: "20/10/2025", total: 280 },
      { idp: "P505", fecha: "24/10/2025", total: 320 },
      { idp: "P506", fecha: "29/10/2025", total: 350 }
    ]
  }
];


let contador =usuarios.length;

const guardarEnLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(usuarios));
};

const insert = (usuario) => {
    usuario.id = ++contador;
    usuarios.push(usuario);
    guardarEnLocalStorage();
};

const get = () => usuarios;

const actualizarEstado = (id, estado) => {
    usuarios.forEach((user) => {
        if (user.id === id) {
            user.estado = estado;
        }
    });
    guardarEnLocalStorage();
};

const obtenerEstado = (id) => {
    const user = usuarios.find((user) => user.id === id);
    return user ? user.estado : null;
};

const obtenerPedidosUsuarios = (id) => {
    const user = usuarios.find((user) => user.id === id);
    return user ? user.pedidos : [];
}

const usuariosApi = { insert, get, actualizarEstado, obtenerEstado,obtenerPedidosUsuarios };
export default usuariosApi;