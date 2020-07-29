// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createStore, applyMiddleware, } from 'redux';

import combineReducers from './combineReducers1';

// 中间件
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

// countReducer 模块化
import userReducer from './reducers/users';
import goods from './reducers/goods';

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

const reducers = combineReducers({
    num: countReducer,
    user: userReducer,
    goods
})

console.log('combineReducers', reducers)

const Store = createStore(reducers, applyMiddleware(logger, thunk, promise));

export default Store;
