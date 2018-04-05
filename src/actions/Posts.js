import * as API from '../utils/Api';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

export function getPostsAction (posts) {
    return {
        type: GET_POSTS,
        posts
    }
} export const getPosts = () => dispatch => (
    API.fetchPosts()
        .then(response => dispatch(getPostsAction(response)))
);



export function getPostAction (post) {
    return {
        type: GET_POST,
        post
    }
} export const getPost = (id) => dispatch => (
    API.fetchPost(id)
        .then(response => dispatch(getPostAction(response)))
);