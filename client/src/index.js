import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './resources/index.css';
import App from './components/App';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import categoriesReducer from "./reducers/Categories";
import postsReducer from "./reducers/Posts";
import commentsReducer from "./reducers/Comments";

const rootReducer = combineReducers ({
    ...categoriesReducer,
    ...postsReducer,
    ...commentsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);