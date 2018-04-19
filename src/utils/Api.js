import uuidv4 from "uuid/v4";
const api = "http://localhost:3001";
let token = "ow9e-8hdo-j092-j9ld";

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

export const addPost = ({ title, author, category, body }) => {
    const post = {
        title,
        author,
        category,
        body,
        id: uuidv4(),
        timestamp: Date.now()
    };

    return fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(response => response.json())
};

export const editPost = (post) => {
    return fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: post.title,
            body: post.body
        })
    }).then(response => response.json())
};

export const votePost = (post, option) => {
    return fetch(`${api}/posts/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(response => response.json())
};

export const deletePost = (post) => {
    return fetch(`${api}/posts/${post.id}`, {
        method: 'DELETE',
        headers: { ...headers }
    }).then(response => response.json())
};

export const fetchComments = (id) => {
    return fetch(`${api}/posts/${id}/comments`, { headers })
        .then(response => response.json())
};

export const addComment = ({ author, body, parentId }) => {
    const comment = {
        author,
        body,
        parentId,
        id: uuidv4(),
        timestamp: Date.now()
    };

    return fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(response => response.json())
};

export const deleteComment = (comment) => {
    return fetch(`${api}/comments/${comment.id}`, {
        method: 'DELETE',
        headers: { ...headers }
    }).then(response => response.json())
};