const api = 'http://localhost:3001';
let token = Math.random().toString().slice(2);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const fetchCategories = () => {
    return fetch(`${api}/categories`, { headers })
        .then(response => response.json())
};
