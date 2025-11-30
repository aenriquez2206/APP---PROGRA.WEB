import base from './base.js'

const carritoApi = {
  // Obtener carrito por usuario
  getCarritoByUser: (idUsuario) => 
    base.get(`carrito/${idUsuario}`),

  // Crear un carrito nuevo
  createCarrito: (idUsuario) => 
    base.post(`carrito`, { idUsuario }),

  // Obtener items del carrito
  getItems: (carritoId) => 
    base.get(`carrito/${carritoId}/items`),

  // Agregar item al carrito
  addItem: (carritoId, idProducto, cantidad) =>
    base.post(`carrito/${carritoId}/items`, { idProducto, cantidad }),

  // Actualizar cantidad de un item del carrito
  updateItem: (itemId, cantidad) =>
    base.put(`carrito/items/${itemId}`, { cantidad }),

  // Eliminar un item específico
  deleteItem: (itemId) =>
    base.remove(`carrito/items/${itemId}`),

  // Vaciar todo el carrito
  clearCarrito: (carritoId) =>
    base.remove(`carrito/${carritoId}/items`)
}

export default carritoApi;
