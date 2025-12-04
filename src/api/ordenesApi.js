import base from './base.js';

const endpoint = 'orden';

const findAll = async () => await base.get(endpoint);

const findByUser = async (userId) => await base.get(`${endpoint}/${userId}`);


const findOne = async (userId) => await findByUser(userId);


const createWithItems = async (ordenData, itemsData) => {

  const payload = {
    ...ordenData,
    items: itemsData
  };
  return await base.post(endpoint, payload);
};


const api = { findAll, findByUser, findOne, createWithItems };

export default api;
