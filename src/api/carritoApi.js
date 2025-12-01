import base from './base.js';

const endpoint = 'carrito';

// 🟢 Obtener carrito de un usuario
const getCarritoByUser = async (userId) => 
    await base.get(`${endpoint}/${userId}`);

// El backend crea el carrito cuando se pide GET /carrito/:userId si no existe.
// `createCarrito` es un alias conveniente que hace la misma petición.
const createCarrito = async (userId) => await getCarritoByUser(userId);

// 🟢 Agregar un producto al carrito
// payload = { carritoId, productoId, cantidad }
const addItem = async (payload) => 
    await base.post(`${endpoint}/add`, payload);

// 🟢 Quitar un producto del carrito
// payload = { carritoId, productoId }
const removeItem = async (payload) => 
    await base.post(`${endpoint}/remove`, payload);

// 🟢 Vaciar todo el carrito de un usuario
const clearCart = async (userId) => 
    await base.remove(`${endpoint}/${userId}/clear`);

const carritoApi = { getCarritoByUser, createCarrito, addItem, removeItem, clearCart };

export default carritoApi;
