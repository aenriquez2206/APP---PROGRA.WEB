<<<<<<< HEAD
const key ="categorias_data"
let categorias = JSON.parse(localStorage.getItem(key)) || [
    { id: 1, nombre: "Videojuegos", img: "/productosAssets/metal.jpeg", ruta: "videojuegos", label: "Videojuegos" },
        { id: 2, nombre: "Consolas", img: "/productosAssets/ps5.jpeg", ruta: "consolas",  label: "Consolas"},
        { id: 3, nombre: "Periféricos", img: "/productosAssets/audifonos.webp", ruta: "perifericos", label: "Periféricos" },
        { id: 4, nombre: "Coleccionables", img: "/productosAssets/pokemones.jpg", ruta: "coleccionables", label: "Coleccionables"},
        { id: 5, nombre: "Membresias", img: "/productosAssets/pokemones.jpg", ruta: "membresias", label: "Membresias"},
        { id: 6, nombre: "Merch", img: "/productosAssets/pokemones.jpg", ruta: "merch", label: "Merch"},
        { id: 7, nombre: "Componentes-PC", img: "/productosAssets/pokemones.jpg", ruta: "componentes-pc", label: "Componentes PC"},
        { id: 8, nombre: "Juguetes", img: "/productosAssets/pokemones.jpg", ruta: "juguetes", label: "Juguetes"}
]

let contador = categorias.length

const guardarEnLocalStorage=()=>{
    localStorage.setItem(key, JSON.stringify(categorias));
}

const insert = (categoria) => {
    categorias.push(categoria);
    guardarEnLocalStorage();
}
const get = () => categorias;
const categoriasApi = { insert, get };
export default categoriasApi;
=======
import base from './base.js'

const endpoint = 'categorias'

const findAll = async () => await base.get(endpoint);
const create = async (payload) => await base.post(endpoint,payload);
const update = async (payload) => await base.put(endpoint,payload);
const remove = async (id) => await base.remove(`${endpoint}/${id}`);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);
const findByRoute = async (route) => await base.get(`${endpoint}/${route}`)


const api = { findAll, create, update, remove, findOne, findByRoute }

export default api;
>>>>>>> 74ef49d1539ad2621f0efe3bb7579391e79afab2
