import { createStore } from 'redux';

const countReducer = (state = 0, action) => {
// const countReducer = (state = 0, { type, payload }) => {
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

const Store = createStore(countReducer);

export default Store;
