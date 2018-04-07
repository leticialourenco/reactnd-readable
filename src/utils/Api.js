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

export const fetchPosts = () => {
    return fetch(`${api}/posts`, { headers })
        .then(response => response.json())
};

export const fetchPost = (id) => {
    return fetch(`${api}/posts/${id}`, { headers })
        .then(response => response.json())
};

export const fetchComments = (id) => {
    return fetch(`${api}/posts/${id}/comments`, { headers })
        .then(response => response.json())
};