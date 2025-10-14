const key ="usuarios_data"
let usuarios = JSON.parse(localStorage.getItem(key))||[
  {
    id: 1,
    img: "/userAssets/image 26.png",
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
      { idp: "P006", fecha: "25/10/2025", total: 270 },{ idp: "P801", fecha: "10/10/2025", total: 150 },
    { idp: "P802", fecha: "14/10/2025", total: 220 },
    { idp: "P803", fecha: "18/10/2025", total: 260 },
    { idp: "P804", fecha: "23/10/2025", total: 310 },
    { idp: "P805", fecha: "27/10/2025", total: 280 },
    { idp: "P806", fecha: "01/11/2025", total: 300 }
    ]
  },
  {
    id: 2,
    img: "/userAssets/image 26.png",
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
      { idp: "P106", fecha: "23/10/2025", total: 260 },{ idp: "P801", fecha: "10/10/2025", total: 150 },
    { idp: "P802", fecha: "14/10/2025", total: 220 },
    { idp: "P803", fecha: "18/10/2025", total: 260 },
    { idp: "P804", fecha: "23/10/2025", total: 310 },
    { idp: "P805", fecha: "27/10/2025", total: 280 },
    { idp: "P806", fecha: "01/11/2025", total: 300 }
    ]
  },
  {
    id: 3,
    img: "/userAssets/image 26.png",
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
    img: "/userAssets/image 26.png",
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
    img: "/userAssets/image 26.png",
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
    img: "/userAssets/image 26.png",
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
  },
  {
    id: 7,
    img: "/userAssets/image 26.png",
    nombre: "user A",
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
  },
  {
    id: 8,
    img: "/userAssets/image 26.png",
    nombre: "userB",
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
  },
  {
  id: 9,
  img: "/userAssets/image 26.png",
  nombre: "Lucía Torres",
  estado: true,
  correo: "lucia.torres@gmail.com",
  fechaRegistro: "07/10/2025",
  pedidos: [
    { idp: "P601", fecha: "08/10/2025", total: 200 },
    { idp: "P602", fecha: "12/10/2025", total: 250 },
    { idp: "P603", fecha: "16/10/2025", total: 230 },
    { idp: "P604", fecha: "21/10/2025", total: 300 },
    { idp: "P605", fecha: "25/10/2025", total: 270 },
    { idp: "P606", fecha: "30/10/2025", total: 310 }
  ]
},
{
  id: 10,
  img: "/userAssets/image 26.png",
  nombre: "Carlos Ruiz",
  estado: true,
  correo: "carlos.ruiz@gmail.com",
  fechaRegistro: "08/10/2025",
  pedidos: [
    { idp: "P701", fecha: "09/10/2025", total: 240 },
    { idp: "P702", fecha: "13/10/2025", total: 280 },
    { idp: "P703", fecha: "17/10/2025", total: 190 },
    { idp: "P704", fecha: "22/10/2025", total: 310 },
    { idp: "P705", fecha: "26/10/2025", total: 330 },
    { idp: "P706", fecha: "31/10/2025", total: 350 }
  ]
},
{
  id: 11,
  img: "/userAssets/image 26.png",
  nombre: "María López",
  estado: true,
  correo: "maria.lopez@gmail.com",
  fechaRegistro: "09/10/2025",
  pedidos: [
    { idp: "P801", fecha: "10/10/2025", total: 150 },
    { idp: "P802", fecha: "14/10/2025", total: 220 },
    { idp: "P803", fecha: "18/10/2025", total: 260 },
    { idp: "P804", fecha: "23/10/2025", total: 310 },
    { idp: "P805", fecha: "27/10/2025", total: 280 },
    { idp: "P806", fecha: "01/11/2025", total: 300 }
  ]
},
{
  id: 12,
  img: "/userAssets/image 26.png",
  nombre: "Andrés Ramos",
  estado: true,
  correo: "andres.ramos@gmail.com",
  fechaRegistro: "10/10/2025",
  pedidos: [
    { idp: "P901", fecha: "11/10/2025", total: 260 },
    { idp: "P902", fecha: "15/10/2025", total: 240 },
    { idp: "P903", fecha: "19/10/2025", total: 280 },
    { idp: "P904", fecha: "24/10/2025", total: 320 },
    { idp: "P905", fecha: "28/10/2025", total: 350 },
    { idp: "P906", fecha: "02/11/2025", total: 370 }
  ]
},
{
  id: 13,
  img: "/userAssets/image 26.png",
  nombre: "Valentina Soto",
  estado: true,
  correo: "valentina.soto@gmail.com",
  fechaRegistro: "11/10/2025",
  pedidos: [
    { idp: "P1001", fecha: "12/10/2025", total: 190 },
    { idp: "P1002", fecha: "16/10/2025", total: 210 },
    { idp: "P1003", fecha: "20/10/2025", total: 230 },
    { idp: "P1004", fecha: "25/10/2025", total: 280 },
    { idp: "P1005", fecha: "29/10/2025", total: 300 },
    { idp: "P1006", fecha: "03/11/2025", total: 330 }
  ]
},
{
  id: 14,
  img: "/userAssets/image 26.png",
  nombre: "Pedro Castillo",
  estado: true,
  correo: "pedro.castillo@gmail.com",
  fechaRegistro: "12/10/2025",
  pedidos: [
    { idp: "P1101", fecha: "13/10/2025", total: 210 },
    { idp: "P1102", fecha: "17/10/2025", total: 270 },
    { idp: "P1103", fecha: "21/10/2025", total: 260 },
    { idp: "P1104", fecha: "26/10/2025", total: 300 },
    { idp: "P1105", fecha: "30/10/2025", total: 340 },
    { idp: "P1106", fecha: "04/11/2025", total: 360 }
  ]
},
{
  id: 15,
  img: "/userAssets/image 26.png",
  nombre: "Diana Morales",
  estado: true,
  correo: "diana.morales@gmail.com",
  fechaRegistro: "13/10/2025",
  pedidos: [
    { idp: "P1201", fecha: "14/10/2025", total: 170 },
    { idp: "P1202", fecha: "18/10/2025", total: 220 },
    { idp: "P1203", fecha: "22/10/2025", total: 260 },
    { idp: "P1204", fecha: "27/10/2025", total: 290 },
    { idp: "P1205", fecha: "31/10/2025", total: 320 },
    { idp: "P1206", fecha: "05/11/2025", total: 350 }
  ]
},
{
  id: 16,
  img: "/userAssets/image 26.png",
  nombre: "Gabriel Flores",
  estado: true,
  correo: "gabriel.flores@gmail.com",
  fechaRegistro: "14/10/2025",
  pedidos: [
    { idp: "P1301", fecha: "15/10/2025", total: 260 },
    { idp: "P1302", fecha: "19/10/2025", total: 290 },
    { idp: "P1303", fecha: "23/10/2025", total: 310 },
    { idp: "P1304", fecha: "28/10/2025", total: 330 },
    { idp: "P1305", fecha: "01/11/2025", total: 350 },
    { idp: "P1306", fecha: "06/11/2025", total: 370 }
  ]
},
{
  id: 17,
  img: "/userAssets/image 26.png",
  nombre: "Sofía Vega",
  estado: true,
  correo: "sofia.vega@gmail.com",
  fechaRegistro: "15/10/2025",
  pedidos: [
    { idp: "P1401", fecha: "16/10/2025", total: 190 },
    { idp: "P1402", fecha: "20/10/2025", total: 230 },
    { idp: "P1403", fecha: "24/10/2025", total: 250 },
    { idp: "P1404", fecha: "29/10/2025", total: 300 },
    { idp: "P1405", fecha: "02/11/2025", total: 320 },
    { idp: "P1406", fecha: "07/11/2025", total: 360 }
  ]
},
{
  id: 18,
  img: "/userAssets/image 26.png",
  nombre: "Miguel Herrera",
  estado: true,
  correo: "miguel.herrera@gmail.com",
  fechaRegistro: "16/10/2025",
  pedidos: [
    { idp: "P1501", fecha: "17/10/2025", total: 220 },
    { idp: "P1502", fecha: "21/10/2025", total: 260 },
    { idp: "P1503", fecha: "25/10/2025", total: 280 },
    { idp: "P1504", fecha: "30/10/2025", total: 310 },
    { idp: "P1505", fecha: "03/11/2025", total: 340 },
    { idp: "P1506", fecha: "08/11/2025", total: 370 }
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