const URI = 'http://localhost:3005/'

const getHeaders = () => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('token'); // Asumo que el token se llama 'token'
    
    if (token) {
        // Añadir el token de autenticación
        headers['Authorization'] = `Bearer ${token}`; 
    }
    return headers;
}

const get = async(endpoint) => {
    return await fetch(URI + endpoint)
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    })
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

const remove = async(endpoint,payload) => {
    const objPayload = {
        method: 'DELETE',
        headers: getHeaders(),
        body: JSON.stringify(payload)
    }

    return await handleFetch(URI + endpoint, objPayload)
}

const handleFetch = async (url, options) => {
    try {
        const response = await fetch(url, options);

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