import { combineReducers } from 'redux';
import categoriesReducer from "./Categories";

const rootReducer = combineReducers (
    categoriesReducer
)

export default rootReducer;