import base from './base.js';

const endpoint = 'carrito';

const getCarritoByUser = async (userId) => 
    await base.get(`${endpoint}/${userId}`);


const createCarrito = async (userId) => await getCarritoByUser(userId);

const addItem = async (payload) => 
    await base.post(`${endpoint}/add`, payload);


const removeItem = async (payload) => 
    await base.post(`${endpoint}/remove`, payload);


const clearCart = async (userId) => 
    await base.remove(`${endpoint}/${userId}/clear`);

const carritoApi = { getCarritoByUser, createCarrito, addItem, removeItem, clearCart };

export default carritoApi;
