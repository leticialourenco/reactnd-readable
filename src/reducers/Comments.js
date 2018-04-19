import {
    GET_COMMENTS,
    SUBMIT_COMMENT
} from "../actions/Comments";

function comments (state = [], action) {
    switch (action.type) {
        case GET_COMMENTS:
            return action.comments;

        case SUBMIT_COMMENT:
            const nextState = [ ...state];
            nextState.push(action.comment);
            return nextState;

        default:
            return state;
    }
}

export default {
    comments
};