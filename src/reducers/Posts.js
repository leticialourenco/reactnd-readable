import {
    GET_POSTS,
    GET_POST,
    SORT_POSTS
} from "../actions/Posts";

import { postsSorter } from '../utils/PostsSorterHelper';

function posts (state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;
        case SORT_POSTS:
            return postsSorter(action.sortBy, state);
        default:
            return state;
    }
}

function post (state = [], action) {
    switch (action.type) {
        case GET_POST:
            return action.post;
        default:
            return state;
    }
}

function sortBy (state = 'newest', action) {
    switch (action.type) {
        case SORT_POSTS:
            return action.sortBy;
        default:
            return state;
    }
}

export default {
    posts,
    post,
    sortBy
};