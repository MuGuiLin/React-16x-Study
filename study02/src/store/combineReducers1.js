export default function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};

    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];

        if (process.env.NODE_ENV !== 'production') {
            if (typeof reducers[key] === 'undefined') {
                new Error("No reducer provided for key \"" + key + "\"");
            }
        }

        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }

    //这是用来确保我们不会对相同内容发出警告
    var finalReducerKeys = Object.keys(finalReducers);

    return function combination(state, action) {
        if (state === void 0) {
            state = {};
        }

        var hasChanged = false;
        var nextState = {};

        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);

            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }

        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}