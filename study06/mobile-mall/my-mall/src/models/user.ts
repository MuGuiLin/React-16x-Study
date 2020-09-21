import { Effect, Reducer } from 'umi';
import { getUserInfo } from '@/services/user';
import { UserLgonForm } from '@/services/login';
import { Toast } from 'antd-mobile';

interface CurrentUser {
    name?: string;
    icon?: string;
    userid?: string;
};

export interface UserModelState {
    userState: CurrentUser
};

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchUser: Effect;
        login: Effect;
    };
    reducers: {
        userInfo: Reducer<UserModelState>;
    };
};

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        userState: {}
    },
    effects: {
        // 获取用户信息
        *fetchUser(_, { call, put }) {
            const res = yield call(getUserInfo);
            yield put({ type: 'userInfo', payload: res })
        },

        // 用户登录
        *login({ payload }, { call, put }) {
            const res = yield call(UserLgonForm, payload);
            console.log('用户登录：', res);

            if (1 === res.status) {
                // 如果登录成功把返回的用户信息保存起来，由于登录成功后返回的用户信息和获取用户信息的数据一模一样，所以这里在redux中就用同一个Key userInfo 来存取
                yield put({ type: 'userInfo', payload: res });
            } else {
                Toast.fail(res.msg || '网络异常，请稍后再试！');
            }
        }
    },
    reducers: {
        userInfo(state, action) {
            console.log('-------Redux-------state', state);
            console.log('-------Redux-------action', action);
            return { ...state, userState: { ...action.payload } || {} }
        }
    }
};

export default UserModel;