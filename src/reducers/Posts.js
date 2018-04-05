import {
    GET_POSTS,
    GET_POST
} from "../actions/Posts";

function posts (state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;
        case GET_POST:
            return action.post;
        default:
            return state;
    }
}

export default { posts };