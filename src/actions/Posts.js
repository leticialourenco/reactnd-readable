import * as API from '../utils/Api';

export const GET_POSTS = 'GET_POSTS';

export function getPostsAction (posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const getPosts = () => dispatch => (
    API.fetchPosts()
        .then(response => dispatch(getPostsAction(response)))
);
