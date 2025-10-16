const key ="categorias_data"
let categorias = JSON.parse(localStorage.getItem(key)) || [
    { id: 1, nombre: "Videojuegos", img: "/productosAssets/metal.jpeg", ruta: "videojuegos", label: "Videojuegos" },
        { id: 2, nombre: "Consolas", img: "/productosAssets/ps5.jpeg", ruta: "consolas",  label: "Consolas"},
        { id: 3, nombre: "Periféricos", img: "/productosAssets/audifonos.webp", ruta: "perifericos", label: "Periféricos" },
        { id: 4, nombre: "Coleccionables", img: "/productosAssets/pokemones.jpg", ruta: "coleccionables", label: "Coleccionables"},
        { id: 5, nombre: "Membresias", img: "/productosAssets/pokemones.jpg", ruta: "membresias", label: "Merch"},
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