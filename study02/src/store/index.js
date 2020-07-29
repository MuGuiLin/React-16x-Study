
// import { createStore } from 'redux';

import { createStore } from '../components/MyRedux';

const countReducer = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD':
            return state + action.data
            break;
    
        default:
            return state
            break;
    }

}

const Store = createStore(countReducer);

export default Store;

