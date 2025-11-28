import base from './base.js'

const endpoint = 'auth'

const login = async (payload) => await base.post(endpoint + '/login',payload);

const api = { login }

export default api;