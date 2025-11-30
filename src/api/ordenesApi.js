import base from './base.js'

const endpoint = 'orden'

const findAll = async () => await base.get(endpoint);
const create = async (payload) => await base.post(endpoint,payload);
//const update = async (payload) => await base.put(endpoint,payload);
//const remove = async (id) => await base.remove(`${endpoint}/${id}`);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);

const api = { findAll, create, findOne }

<<<<<<< HEAD
export default api;
=======
const guardarEnLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(pedidos));
};

const insert = (pedido) => {
    pedido.id = ++contador;
    pedidos.push(pedido);
    guardarEnLocalStorage();
};

const get = () => pedidos;



const pedidosApi = { insert, get };
///
///import base from './base.js';

///const endpoint = 'admin/orden';

///const findAll = async () => await base.get(endpoint);
///const findOne = async (id) => await base.get(`${endpoint}/${id}`);
///const update = async (payload) => await base.put(endpoint, payload);
///const remove = async (id) => await base.remove(`${endpoint}/${id}`);

///const api = { findAll, findOne, create, update, remove };
///
export default pedidosApi;

>>>>>>> c520da8c2d80ae1052f5c2e66789314c1045cfd0
