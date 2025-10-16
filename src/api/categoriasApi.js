const key ="categorias_data"
let categorias = JSON.parse(localStorage.getItem(key)) || [
    { id: 1, nombre: "Videojuegos", img: "/productosAssets/RDR2.jpg", ruta: "videojuegos", label: "Videojuegos" },
        { id: 2, nombre: "Consolas", img: "/productosAssets/RDR2.jpg", ruta: "consolas",  label: "Consolas"},
        { id: 3, nombre: "Periféricos", img: "/productosAssets/RDR2.jpg", ruta: "perifericos", label: "Periféricos" },
        { id: 4, nombre: "Coleccionables", img: "/productosAssets/RDR2.jpg", ruta: "coleccionables", label: "Coleccionables"},
        { id: 5, nombre: "Membresias", img: "/productosAssets/RDR2.jpg", ruta: "membresias", label: "Merch"},
        { id: 6, nombre: "Merch", img: "/productosAssets/RDR2.jpg", ruta: "merch", label: "Merch"},
        { id: 7, nombre: "Componentes-PC", img: "/productosAssets/RDR2.jpg", ruta: "componentes-pc", label: "Componentes PC"},
        { id: 8, nombre: "Juguetes", img: "/productosAssets/RDR2.jpg", ruta: "juguetes", label: "Juguetes"}
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