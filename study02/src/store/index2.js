import { createStore, applyMiddleware } from 'redux';

// 中间件
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
            break;

        case 'DEL':
            return state - action.payload;
            break;

        default:
            return state;
            break;
    }
}

const Store = createStore(countReducer, applyMiddleware(logger, thunk, promise));

export default Store;
