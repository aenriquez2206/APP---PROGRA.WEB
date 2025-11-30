import base from './base.js'

const endpoint = 'categorias'

const findAll = async () => await base.get(endpoint);
const create = async (payload) => await base.post(endpoint,payload);
const update = async (payload) => await base.put(endpoint,payload);
const remove = async (id) => await base.remove(`${endpoint}/${id}`);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);
const findByRoute = async (route) => await base.get(`${endpoint}/${route}`)


const api = { findAll, create, update, remove, findOne, findByRoute }

export default api;
