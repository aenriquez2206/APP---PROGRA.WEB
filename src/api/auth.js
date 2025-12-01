import base from './base.js'

const endpoint = 'auth'

const login = async (payload) => await base.post(endpoint + '/login',payload);
const findAll = async () => await base.get(endpoint);
const create = async (payload) => await base.post(endpoint,payload);
const update = async (payload) => await base.put(endpoint,payload);
const remove = async (id) => await base.remove(`${endpoint}/${id}`);
const findOne = async (id) => await base.get(`${endpoint}/${id}`);

const registrar = async (payload) => {
    return await base.post(endpoint + '/registrar', payload); 
};

const findUserByEmail = async (email) => {
    return await base.post(endpoint + '/find-by-email', { email });
};

const resetPassword = async (payload) => {
    return await base.post(endpoint + '/reset-password', payload);
};

const api = {login,registrar,findAll,create,update,remove,findOne,findUserByEmail,resetPassword}

export default api;