import base from './base.js';

const endpoint = 'orden';

// 🟢 Obtener todas las órdenes (admin)
const findAll = async () =>
  await base.get(endpoint);

// 🟢 Obtener historial de órdenes de un usuario
const findByUser = async (userId) =>
  await base.get(`${endpoint}/${userId}`);

// 🟢 Crear orden (Checkout)
const create = async (payload) =>
  await base.post(endpoint, payload);

const api = { findAll, findByUser, create };

export default api;
