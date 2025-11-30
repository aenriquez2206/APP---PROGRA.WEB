import base from './base.js'

const endpoint = 'auth'

const login = async (payload) => await base.post(endpoint + '/login',payload);

const registrar = async (payload) => {
    return await base.post(endpoint + '/registrar', payload); 
};

const api = { login, registrar }

export default api;