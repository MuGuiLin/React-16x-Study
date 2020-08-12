export default {
    namespace: 'user',

    state: {
        name: '沐枫',
        age: 28,
        job: 'Web 前端开发！'
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.debug('users：根据注册mode的顺序，然后再执行这里！');
        },
    },

    effects: {
        * fetch({ payload }, { call, put }) {
            yield put({ type: 'upUser' });
        }

    },

    reducres: {
        upUser(state, action) {
            return {
                ...state, ...action.payload
            }
        }
    }
};

// Models 的用法用说明：https://dvajs.com/guide/concepts.html#models