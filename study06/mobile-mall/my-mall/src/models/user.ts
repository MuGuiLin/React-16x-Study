import { Effect, Reducer } from 'umi';
import { getUserDetail, getUserInfo, UserLogout } from '@/services/user';
import { UserLgonForm } from '@/services/login';
import { Toast } from 'antd-mobile';

interface UserParType {
    name?: string;
    icon?: string;
    userid?: string;
};

interface DetailUser extends UserParType {
    email: string;
    signature: string;
    title: string,
    tags?: {
        key: string;
        label: string;
    }[];
    country: string;
    address: string,
    phone: string,
}

export interface UserModelState {
    userInfo: UserParType;
    userDetail: DetailUser | {
        name: any;
        icon: any;
    };
};

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchUser: Effect;
        userLogin: Effect;
        userLogout: Effect;
        FetchDetail: Effect;
    };
    reducers: {
        saveUserData: Reducer<UserModelState>;
        clearUserData: Reducer<UserModelState>;
    };
};

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        userInfo: {},
        userDetail: {
            name: "",
            icon: ""
        }
    },
    // 副作用
    effects: {
        // 获取用户信息
        *fetchUser(_, { call, put }) {
            // call用于调用异步逻辑，支持 promise!
            const response = yield call(getUserInfo);
            // put用于触发 action, 
            yield put({ type: 'saveUserData', payload: { userInfo: response } })
        },

        // 用户登录
        *userLogin({ payload }, { call, put }) {
            const res = yield call(UserLgonForm, payload);
            console.log('用户登录：', res);

            if (1 === res.status) {
                // 如果登录成功把返回的用户信息保存起来，由于登录成功后返回的用户信息和获取用户信息的数据一模一样，所以这里在redux中就用同一个Key saveUserData 来存取
                yield put({ type: 'saveUserData', payload: { userInfo: res } });
            } else {
                Toast.fail(res.msg || '网络异常，请稍后再试！');
            }
        },

        // 用户退出
        *userLogout(_, { put, call }) {
            const res = yield call(UserLogout);
            if (1 === res.status) {
                yield put({
                    type: 'clearUserData',
                    payload: {
                        userInfo: {},
                        userDetail: { name: '', icon: '' }
                    }
                });
            } else {
                // Toast.fail(res.msg || '网络异常，请稍后再试！');
                yield put({
                    type: 'clearUserData',
                    payload: {
                        userInfo: {},
                        userDetail: { name: '', icon: '' }
                    }
                });
            }
        },

        // 获取用户详情
        *FetchDetail(_, { put, call }) {
            const response = yield call(getUserDetail);
            yield put({ type: 'saveUserData', payload: { userDetail: response } });
        },


    },
    reducers: {
        saveUserData(state, action) {
            console.log('-------Redux-------state', state);
            console.log('-------Redux-------action', action);
            // 以前 return { ...state, userInfo: { ...action.payload } || {} };

            // 现在 fetchUser, userLogin, FetchDetail 这3个共用一个userInfo Key
            return { ...state, ...action.payload || {} };
        },

        clearUserData(state, action) {
            console.log('-------Redux-------state', state);
            console.log('-------Redux-------action', action);

            // 清空用户数据 
            return { ...state, ...action.payload };
        }
    }
};

export default UserModel;