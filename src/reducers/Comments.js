import {
    GET_COMMENTS,
    SUBMIT_COMMENT,
    DELETE_COMMENT
} from "../actions/Comments";

function comments (state = [], action) {
    const nextState = [ ...state];

    switch (action.type) {
        case GET_COMMENTS:
            return action.comments;

        case SUBMIT_COMMENT:
            nextState.push(action.comment);
            return nextState;

        case DELETE_COMMENT:
            let commentLocation;

            commentLocation = nextState.findIndex(comment => comment.id === action.comment.id);
            nextState[commentLocation] = { ...action.comment };
            return nextState;

        default:
            return state;
    }
}

export default {
    comments
};