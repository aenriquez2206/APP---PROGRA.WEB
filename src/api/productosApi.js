const key ="productos_data"


let productos = JSON.parse(localStorage.getItem(key)) || [
  {
    id: 1000,
    img: "",
    nombre: "Battlefield 2042",
    presentacion: "digital",
    descripcion:
      "Shooter bélico multijugador ambientado en un futuro cercano con mapas enormes y vehículos modernos.",
    categoria: "videojuegos",
    stock: 10,
  },
  {
    id: 1001,
    img: "",
    nombre: "PlayStation 5",
    presentacion: "físico",
    descripcion:
      "Consola de nueva generación con soporte para juegos en 4K, SSD ultrarrápido y mando DualSense.",
    categoria: "consolas",
    stock: 5,
  },
  {
    id: 1002,
    img: "",
    nombre: "Xbox Series X",
    presentacion: "físico",
    descripcion:
      "Consola de alto rendimiento con potencia de 12 teraflops y compatibilidad retroactiva.",
    categoria: "consolas",
    stock: 4,
  },
  {
    id: 1003,
    img: "",
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    presentacion: "físico",
    descripcion:
      "Aventura épica en el mundo de Hyrule con mecánicas de exploración, construcción y combate.",
    categoria: "videojuegos",
    stock: 8,
  },
  {
    id: 1004,
    img: "",
    nombre: "Nintendo Switch OLED",
    presentacion: "físico",
    descripcion:
      "Versión mejorada de la consola híbrida con pantalla OLED y mejor calidad de audio.",
    categoria: "consolas",
    stock: 6,
  },
  {
    id: 1005,
    img: "",
    nombre: "God of War Ragnarök",
    presentacion: "digital",
    descripcion:
      "Kratos y Atreus enfrentan el destino mientras los dioses nórdicos preparan el fin del mundo.",
    categoria: "videojuegos",
    stock: 12,
  },
  {
    id: 1006,
    img: "",
    nombre: "DualSense Controller - Cosmic Red",
    presentacion: "físico",
    descripcion:
      "Mando inalámbrico oficial de PS5 con gatillos adaptativos y vibración háptica.",
    categoria: "coleccionable",
    stock: 15,
  },
  {
    id: 1007,
    img: "",
    nombre: "Halo Infinite",
    presentacion: "digital",
    descripcion:
      "El Jefe Maestro regresa en una nueva aventura de mundo semiabierto con combate intenso.",
    categoria: "videojuegos",
    stock: 9,
  },
  {
    id: 1008,
    img: "",
    nombre: "Figura coleccionable de Mario Bros",
    presentacion: "físico",
    descripcion:
      "Figura de colección de alta calidad basada en el personaje icónico de Nintendo.",
    categoria: "coleccionable",
    stock: 20,
  },
  {
    id: 1009,
    img: "",
    nombre: "Pokémon Scarlet",
    presentacion: "digital",
    descripcion:
      "Nueva entrega de la saga Pokémon con mundo abierto y nuevas criaturas.",
    categoria: "videojuegos",
    stock: 11,
  }
]

let contador = productos.length;

const guardarEnLocalStorage=()=>{
    localStorage.setItem(key, JSON.stringify(productos));
}

const insert = (producto) => {
    producto.id = ++contador;
    productos.push(producto);
    guardarEnLocalStorage();
}

const get = () => productos;

const getProducto =(id)=>{
    return productos.find((prod)=>prod.id===id);
}



const productosApi = { insert, get,getProducto };
export default productosApi;
