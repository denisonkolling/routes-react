const BASE_URL = 'https://api.exemplo.com/products'

export const apiLogin = (email, password) => {
    if (email === 'user@email.com' && password === 'password123') {
        return {
            success: true,
            token: 'jwt',
            user: { id: 1, name: 'User name', email }
        }
    } else {
        // throw new Error('Authentication has failed.')
        return 'Authentication has failed.';
    }
}

export const fetchData = async (termo) => {
    // Implementação do GET
    const response = await fetch(`https://api.github.com/search/users?q=${termo}`)
    .then(response => response.json());

    return response;
}

export const deletData = (id) => {
    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => console.log('Data deleted.'))
    .catch(error => console.log(error))
}

export const updateData = (id, data) => {
    fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(() => console.log('Data updated with success.'))
    .catch(error => console.log(error))
}

export const sendData = (data) => {
    fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(() => console.log('Data updated with success.'))
    .catch(error => console.log(error))
}