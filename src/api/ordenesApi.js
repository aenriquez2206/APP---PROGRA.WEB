import base from './base.js';

const endpoint = 'orden';

const findAll = async () => await base.get(endpoint);

const findByUser = async (userId) => await base.get(`${endpoint}/${userId}`);

// Algunos componentes frontend llaman a `findOne` (por nombre histórico).
// Proporcionamos un alias hacia `findByUser` para compatibilidad.
const findOne = async (userId) => await findByUser(userId);

// ⚡ Crear orden (checkout)
const createWithItems = async (ordenData, itemsData) => {
  // Enviar el payload tal como espera el backend
  const payload = {
    ...ordenData,
    items: itemsData
  };
  return await base.post(endpoint, payload);
};


const api = { findAll, findByUser, findOne, createWithItems };

export default api;
