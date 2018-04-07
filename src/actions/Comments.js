import * as API from '../utils/Api';

export const GET_COMMENTS = 'GET_COMMENTS';

export function getCommentsAction (comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
} export const getComments = (id) => dispatch => (
    API.fetchComments(id)
        .then(response => dispatch(getCommentsAction(response)))
);
