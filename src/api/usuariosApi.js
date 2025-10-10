const key ="usuarios_data"
let usuarios =JSON.parse(localStorage.getItem(key))||[
    {
        id: 1,
        img: "/userAssets/image 25.png",
        nombre: "Ariel Enriquez",
        estado: true,
        correo: "ariel@gmail.com",
        fechaRegistro: "01/10/2025"
    },
    {
        id: 2,
        img: "/userAssets/image 25.png",
        nombre: "Helmut Saker",
        estado: true,
        correo: "helmut@gmail.com",
        fechaRegistro: "02/10/2025"
    },
    {
        id: 3,
        img: "/userAssets/image 25.png",
        nombre: "Rodrigo Thompson",
        estado: true,
        correo: "rodrigo@gmail.com",
        fechaRegistro: "03/10/2025"
    },
    {
        id: 4,
        img: "/userAssets/image 25.png",
        nombre: "Sebastian Valverde",
        estado: true,
        correo: "sebastian.valverde@gmail.com",
        fechaRegistro: "04/10/2025"
    },
    {
        id: 5,
        img: "/userAssets/image 25.png",
        nombre: "Sebastian Diaz",
        estado: true,
        correo: "sebastian.diaz@gmail.com",
        fechaRegistro: "05/10/2025"
    },
    {
        id: 6,
        img: "/userAssets/image 25.png",
        nombre: "Nehemias Falcon",
        estado: true,
        correo: "nehemias@gmail.com",
        fechaRegistro: "06/10/2025"
    },
    {
        id: 7,
        img: "/userAssets/image 25.png",
        nombre: "Ariel ",
        estado: true,
        correo: "ariel2@gmail.com",
        fechaRegistro: "07/10/2025"
    },
    {
        id: 8,
        img: "/userAssets/image 25.png",
        nombre: "Helmut ",
        estado: true,
        correo: "helmut2@gmail.com",
        fechaRegistro: "08/10/2025"
    },
    {
        id: 9,
        img: "/userAssets/image 25.png",
        nombre: "Rodrigo ",
        estado: true,
        correo: "rodrigo2@gmail.com",
        fechaRegistro: "09/10/2025"
    },
    {
        id: 10,
        img: "/userAssets/image 25.png",
        nombre: "Sebastian ",
        estado: true,
        correo: "sebastian.valverde2@gmail.com",
        fechaRegistro: "10/10/2025"
    },
    {
        id: 11,
        img: "/userAssets/image 25.png",
        nombre: "Sebastian ",
        estado: true,
        correo: "sebastian.diaz2@gmail.com",
        fechaRegistro: "11/10/2025"
    },
    {
        id: 12,
        img: "/userAssets/image 25.png",
        nombre: "Nehemias ",
        estado: true,
        correo: "nehemias2@gmail.com",
        fechaRegistro: "12/10/2025"
    }
]


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

const usuariosApi = { insert, get, actualizarEstado, obtenerEstado };
export default usuariosApi;