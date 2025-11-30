import base from './base.js';

const endpoint = 'orden';

const findAll = async () => await base.get(endpoint);

const findByUser = async (userId) => await base.get(`${endpoint}/${userId}`);

// ⚡ Crear orden (checkout)
const create = async (payload) => await base.post(endpoint, payload);

const api = { findAll, findByUser, create };

export default api;
