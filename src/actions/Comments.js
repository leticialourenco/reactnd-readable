import * as API from '../utils/Api';

export const GET_COMMENTS = 'GET_COMMENTS';
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';

export function getCommentsAction (comments) {
    return {
        type: GET_COMMENTS,
        comments
    }
} export const getComments = (id) => dispatch => (
    API.fetchComments(id)
        .then(response => dispatch(getCommentsAction(response)))
);


export function submitCommentAction (comment) {
    return {
        type: SUBMIT_COMMENT,
        comment
    }
} export const submitComment = ({ author, body, parentId }) => dispatch => (
    API.addComment({ author, body, parentId })
        .then(response => dispatch(submitCommentAction(response)))
);