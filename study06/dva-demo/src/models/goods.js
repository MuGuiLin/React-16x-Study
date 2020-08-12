export default {
    namespace: 'goods',

    state: {
        book: [
            { name: 'HTML5权威指南', rmb: 108.50 },
            { name: 'CSS3秘笈', rmb: 96.00 },
            { name: 'JavaScript犀牛书', rmb: 128 },
        ]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.debug('根据路由按需注册！');
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