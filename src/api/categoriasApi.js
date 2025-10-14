const key ="categorias_data"
let categorias = JSON.parse(localStorage.getItem(key)) || [
    "videojuegos",
    "consolas",
    "coleccionables"
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