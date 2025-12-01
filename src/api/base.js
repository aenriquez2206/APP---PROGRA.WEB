const URI = 'http://localhost:3005/'

const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('token');
    
    if (token) {
        headers['Authorization'] = `Bearer ${token}`; 
    }
    return headers;
}

const get = async(endpoint) => {
    const objPayload = {
        method: 'GET',
        headers: getHeaders()
    }
    return await handleFetch(URI + endpoint,objPayload)
}

const post = async(endpoint, payload) => {
    const objPayload = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    }

    return await handleFetch(URI + endpoint, objPayload)
}

const put = async(endpoint, payload) => {
    const objPayload = {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    }

    return await handleFetch(URI + endpoint, objPayload)
}

const remove = async(endpoint, payload) => {
    const objPayload = {
        method: 'DELETE',
        headers: getHeaders(),

    }

    return await handleFetch(URI + endpoint, objPayload)
}

const handleFetch = async (url, options) => {
    try {
        const response = await fetch(url, options);

        // Si es 401, limpiar token y redirigir a login
        if (response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('usuario');
            window.location.href = '/login';
            return null;
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({})); 
            
            throw { 
                status: response.status,
                message: errorData.message || `Error ${response.status} en la petición.`,
                data: errorData
            };
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}

const base = {get, post, put, remove }

export default base;