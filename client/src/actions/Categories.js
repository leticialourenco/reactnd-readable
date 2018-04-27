import * as API from '../utils/Api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORIES';

export function getCategoriesAction (categories) {
    return {
        type: GET_CATEGORIES,
        categories
    }
} export const getCategories = () => dispatch => (
    API.fetchCategories()
        .then(response => dispatch(getCategoriesAction(response)))
);

export function setCategory (id) {
    return {
        type: SET_CATEGORY,
        id
    }
}