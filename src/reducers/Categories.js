import {
    GET_CATEGORIES,
    SET_CATEGORY
} from "../actions/Categories";

function categories (state = {categories: []}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function activeCategory (state = null, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return action.id;
        default:
            return state;
    }
}

export default {
    categories,
    activeCategory
};