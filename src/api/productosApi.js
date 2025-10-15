const key = "productos_data"

import reddead from '../assets/RDR2.jpg'
import hollow from '../assets/hollow.jpg'
import spiderman from '../assets/spiderman.jpeg'
import madden from '../assets/madden.jpeg'
import _2k25 from '../assets/2k25.jpeg'
import call from '../assets/call.jpg'
import miles from '../assets/miles.jpg'
import jump from '../assets/jump.jpeg'
import demon from '../assets/demon.jpg'
import _2k26 from '../assets/2k26.jpg'
import cronos from '../assets/cronos.jpg'
import call7 from '../assets/call7.jpg'
import battlefield from '../assets/battlefield.webp'
import borderland from '../assets/borderlands.webp'
import ninja from '../assets/ninja.jpg'


import ps5 from '../assets/ps5.jpeg' 
import xbox from '../assets/xbox.webp'

import perifericos from '../assets/audifonos.webp'

const ProductosCompletos = [
    { id: 1, stock : 56, nombre: "RDO2 Juego PS4", categoria: "videojuegos", precio: 199.00, img: reddead, genero: "accion", descripcion: "Red Dead Redemption 2 para PS4 es un juego de acción-aventura ambientado en el salvaje oeste en 1899, donde el jugador asume el papel de Arthur Morgan, un forajido de la banda de Van der Linde que lucha por sobrevivir mientras la era de los forajidos llega a su fin. El juego ofrece un mundo abierto detallado y con vida propia, una narrativa épica con dilemas morales, jugabilidad realista con combate, caza y exploración, y un modo multijugador online llamado Red Dead Online."},
    { id: 2, stock : 3, nombre: "Hollow Knight PS4", categoria: "videojuegos", precio: 199.00, img: hollow, genero: "aventura", descripcion: "Hollow Knight es un videojuego de acción y aventura en 2D de tipo Metroidvania, ambientado en el reino subterráneo de insectos en ruinas Hallownest, donde el jugador controla a un misterioso caballero sin nombre que debe desentrañar los secretos del reino y combatir criaturas corrompidas. El juego destaca por su vasto mundo interconectado, controles 2D precisos, combate desafiante con habilidades evolutivas y la posibilidad de equipar reliquias llamadas amuletos, todo envuelto en un estilo artístico único."},
    { id: 3, stock : 43, nombre: "Spiderman PS4", categoria: "videojuegos", precio: 199.00, img: spiderman, genero: "aventura", descripcion: "Marvel's Spider-Man para PS4 es un videojuego de acción y aventuras en mundo abierto donde controlas a un experimentado Peter Parker como Spider-Man en una Nueva York original y vibrante. El juego destaca por su combate fluido e improvisado, acrobacias dinámicas, recorrido urbano ágil con telarañas, una historia original con personajes icónicos, y la capacidad de interactuar con el entorno para derrotar villanos."},
    { id: 4, stock : 12, nombre: "Madden 25 PS4", categoria: "videojuegos", precio: 199.00, img: madden, genero: "deporte", descripcion: "Madden NFL 25 para PS4 ofrece la experiencia de fútbol americano con modo Ultimate Team, modo Franquicia renovado conárboles de habilidades y modo Superestrella para la carrera de un jugador, además de la opción de jugar partidos rápidos. El juego cuenta con mecánicas de física mejoradas en el control del portador del balón y placajes, ofreciendo un mayor realismo y profundidad estratégica. También incluye presentación visual espectacular y funciones de accesibilidad, como la transcripción de chats online y recordatorios de controles."},
    { id: 5, stock : 56, nombre: "2K25 PS4", categoria: "videojuegos", precio: 199.00, img: _2k25, genero: "deporte", descripcion: "NBA 2K25 para PS4 te permite vivir la experiencia del baloncesto profesional compitiendo en varios modos, como Mi CARRERA, donde creas tu jugador para dominar la liga, o MyTEAM, donde coleccionas cartas para formar el equipo de tus sueños. En La W, te conviertes en una estrella de la WNBA, mientras que Mi NBA te permite construir y dirigir tu propia dinastía. La versión de PS4 no incluye el modo La Ciudad/La Isla, característico de las plataformas de nueva generación, pero ofrece el Neighborhood para la experiencia de Mi CARRERA."},
    { id: 6, stock : 45, nombre: "CALL OF DUTY BOIII PS4", categoria: "videojuegos", precio: 199.00, img: call, genero: "accion", descripcion: "Call of Duty: Black Ops III en PS4 es un shooter en primera persona con tres modos de juego: Campaña, Multijugador y Zombies. Ambientado en 2065, introduce un futuro distópico con supersoldados mejorados biotecnológicamente. Los jugadores experimentan combate moderno con mecánicas de parkour, correr por las paredes y un sistema de Especialistas con habilidades únicas."},
    { id: 7, stock : 23, nombre: "SPIDERMAN MILES PS4", categoria: "videojuegos", precio: 199.00, img: miles, genero: "aventura", descripcion: "Marvel's Spider-Man: Miles Morales para PS4 es un videojuego de acción y aventura donde Miles Morales, tras el entrenamiento de Peter Parker, debe proteger Nueva York de una corporación y un ejército criminal mientras se convierte en su propia versión de Spider-Man. El juego explora su ascenso como héroe, su dominio de poderes como la bioelectricidad y el camuflaje, y su búsqueda de un sentido de pertenencia en su hogar de Brooklyn."},
    { id: 8, stock : 65, nombre: "JUMP FORCE PS4", categoria: "videojuegos", precio: 199.00, img: jump, genero: "lucha", descripcion: "Jump Force para PS4 es un videojuego de lucha en 3D, desarrollado por Spike Chunsoft y publicado por Bandai Namco, que reúne a héroes icónicos de diversas series de manga de la revista Weekly Shonen Jump para combatir una amenaza en el mundo real. Ofrece una jugabilidad en equipos de tres personajes, escenarios realistas y la opción de crear un avatar personalizado para competir en modos online y offline."},
    { id: 9, stock : 87, nombre: "DEMON SLAYER PS4", categoria: "videojuegos", precio: 199.00, img: demon, genero: "lucha", descripcion: "Demon Slayer: Kimetsu no Yaiba - The Hinokami Chronicles para PS4 es un juego de lucha en 3D basado en la exitosa serie de anime, donde los jugadores reviven la historia de Tanjiro Kamado y sus esfuerzos para convertir a su hermana Nezuko de nuevo en humana, enfrentándose a demonios en emocionantes batallas. El juego permite a los jugadores experimentar el modo historia de la serie y participar en duelos 1 contra 1 o 2 contra 2, usando las habilidades de una lista de personajes que se expande."},
    { id: 10, stock : 2, nombre: "2K26 PS4", categoria: "videojuegos", precio: 199.00, img: _2k26, genero: "deporte", descripcion: "NBA 2K26 para PS4 se presenta como una entrega que busca revolucionar la experiencia de baloncesto virtual, incorporando la tecnología ProPLAY™ para animaciones más realistas y una jugabilidad mejorada."},
    { id: 11, stock : 54, nombre: "CRONOS PS4", categoria: "videojuegos", precio: 199.00, img: cronos, genero: "accion", descripcion: "Cronos: The New Dawn es un juego de terror y supervivencia en tercera persona donde juegas como un Viajero que viaja al pasado (Polonia de los 80) desde un futuro postapocalíptico para detener una catástrofe. La trama gira en torno a una epidemia que transformó a la humanidad en monstruos, y tu misión es descubrir el origen del virus y evitar su propagación, enfrentándote a criaturas mutantes y gestionando recursos limitados en un mundo sombrío y retrofuturista."},
    { id: 12, stock : 67, nombre: "CALL OF DUTY 7 PS4", categoria: "videojuegos", precio: 199.00, img: call7, genero: "accion", descripcion: "Call of Duty: Black Ops 7, que está ambientado en 2035, sigue a David Section Mason mientras lidera un equipo de élite contra un enemigo que busca desestabilizar el orden mundial utilizando el miedo como arma. El juego se basa en los pilares característicos de la serie, combinando una campaña cooperativa, un innovador multijugador con mapas futuristas y el modo Zombis por rondas en el Éter Oscuro."},
    { id: 13, stock : 12, nombre: "BATTLEFIELD 6", categoria: "videojuegos", precio: 199.00, img: battlefield, genero: "accion", descripcion: "La sinopsis de Battlefield 6 (ahora conocido como Battlefield 2042) se desarrolla en un futuro cercano, en el año 2042, donde las principales naciones de la Tierra se han visto forzadas a depender de mercenarios y corporaciones militares privadas como la Pax Armata debido a la escasez de recursos y al cambio climático, lo que desestabiliza el orden mundial y empuja al mundo al borde de una guerra global."},
    { id: 14, stock : 34, nombre: "BORDERLANDS 4", categoria: "videojuegos", precio: 199.00, img: borderland, genero: "accion", descripcion: "En Borderlands 4, eres uno de los cuatro nuevos Buscacámaras que aterrizan en el planeta Kairos, una tierra bajo el yugo del tiránico Guardián del Tiempo. Te unirás a la resistencia local para oponerte a su régimen opresivo, buscando la Bóveda del planeta y enfrentándote a monstruos, bandidos y bestias en un mundo lleno de exploración libre y combate caótico."},
    { id: 15, stock : 12, nombre: "NINJA 4", categoria: "videojuegos", precio: 199.00, img: ninja, genero: "accion", descripcion: "Un joven ninja prodigio llamado Yakumo se enfrenta al resurgimiento del Dragón Oscuro en un Tokio futurista y corrompido, mientras que el legendario Ryu Hayabusa también juega un papel importante"},
    { id: 20, stock : 3, nombre: "PlayStation 5", categoria: "consolas", precio: 199.00, img: ps5, genero: "Hardware", descripcion: "La PlayStation 5 (PS5) es la quinta consola de sobremesa de Sony, destacando por su potencia de procesamiento AMD Zen 2 y GPU RDNA 2, un rápido SSD para tiempos de carga ultrarrápidos, y el revolucionario controlador DualSense con retroalimentación háptica y gatillos adaptativos para una inmersión sin precedentes. También ofrece audio 3D Tempest, retrocompatibilidad con juegos de PS4 y soporte para juegos exclusivos como Demon's Souls y Marvel's Spider-Man: Miles Morales."},
    { id: 21, stock : 4, nombre: "Xbox Series X", categoria: "consolas", precio: 199.00, img: xbox, genero: "Hardware", descripcion: "La Xbox Series X es una consola potente y rápida de Microsoft, destacada por su SSD de 1 TB que reduce drásticamente los tiempos de carga, su capacidad para jugar a altas resoluciones y tasas de fotogramas de hasta 120 FPS, el sonido espacial 3D y el sistema Quick Resume que permite cambiar instantáneamente entre múltiples juegos. También incluye retrocompatibilidad con generaciones anteriores, diseño silencioso y eficiente, y la función Smart Delivery."},
    { id: 40, stock : 5, nombre: "Headset Gaming Pro", categoria: "perifericos", precio: 199.00, img: perifericos, genero: "Audio", descripcion: "Los auriculares gamers, además de sonido estéreo, suelen ofrecer un sonido envolvente a través de un efecto 7.1. Esto se logra a través del procesamiento de las señales y produce la sensación de tener varios altavoces incorporados, de modo de poder diferenciar varias direcciones de donde proviene el sonido."},
];


export const get = () => {
    let productos = JSON.parse(localStorage.getItem(key));

    if (!productos) {
        save(ProductosCompletos);
        return ProductosCompletos;
    }

    return productos.map(productoGuardado => {
        const productoInicial = ProductosCompletos.find(p => p.id === productoGuardado.id);
        
        return {
            ...productoGuardado,
            img: productoInicial ? productoInicial.img : productoGuardado.img, 
        };
    });
}

export const save = (productos) => {
    localStorage.setItem(key, JSON.stringify(productos));
}

export const getCategories = () => {
    const todosLosProductos = get();
    const categorias = todosLosProductos.map(p => p.categoria);
    return [...new Set(categorias)];
}
