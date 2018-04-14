import {
    GET_POSTS,
    GET_POST,
    SUBMIT_POST,
    EDIT_POST,
    SORT_POSTS
} from "../actions/Posts";

import { postsSorter } from '../utils/PostsSorterHelper';

function posts (state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;

        case SUBMIT_POST:
            return state;

        case EDIT_POST:
            return state;

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

function sortBy (state = '', action) {
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