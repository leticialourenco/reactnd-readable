import {
    GET_COMMENTS,
} from "../actions/Comments";

function comments (state = [], action) {
    switch (action.type) {
        case GET_COMMENTS:
            return action.comments;
        default:
            return state;
    }
}

export default {
    comments
};