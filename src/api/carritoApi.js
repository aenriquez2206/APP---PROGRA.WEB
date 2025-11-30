
import base from './base.js'

const carritoApi = {
  // Obtener carrito por usuario
  getCarritoByUser: (idUsuario) => base.get(`carrito/${idUsuario}`),

  // Crear carrito
  createCarrito: (idUsuario) => base.post(`carrito/`, { idUsuario }),

  // Obtener items del carrito
  getItems: (carritoId) => base.get(`itemDeLaOrden/${carritoId}`),

  // Agregar item
  addItem: (carritoId, productoId, cantidad) =>
    base.post(`itemDeLaOrden/`, { carritoId, productoId, cantidad }),

  // Actualizar cantidad
  updateItem: (itemId, cantidad) =>
    base.put(`itemDeLaOrden/${itemId}`, { cantidad }),

  // Eliminar un item
  deleteItem: (itemId) =>
    base.remove(`itemDeLaOrden/${itemId}`),

  // Vaciar carrito
  clearCarrito: (carritoId) =>
    base.remove(`itemDeLaOrden/carrito/${carritoId}`)
}

export default carritoApi;


