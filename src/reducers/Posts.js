import {
    GET_POSTS,
    GET_POST,
    SUBMIT_POST,
    EDIT_POST,
    VOTE_POST,
    DELETE_POST,
    SORT_POSTS
} from "../actions/Posts";

import { postsSorter } from '../utils/PostsSorterHelper';

function posts (state = [], action) {
    switch (action.type) {
        case GET_POSTS:
            return action.posts;

        case VOTE_POST:
        case DELETE_POST:
            const nextState = [ ...state];
            let postLocation;

            postLocation = nextState.findIndex(post => post.id === action.post.id);
            nextState[postLocation] = { ...action.post };
            return nextState;

        case SORT_POSTS:
            return postsSorter(action.sortBy, state);

        case SUBMIT_POST:
        case EDIT_POST:
        default:
            return state;
    }
}

function post (state = [], action) {
    switch (action.type) {
        case GET_POST:
        case VOTE_POST:
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