import request from '@/utils/request';

export interface LoginParams {
    username: string;
    password: string;
};
export async function UserLogin(params: LoginParams) {
    return await request('/index.php?controller=simple&action=login_act', {
        method: 'POST',
        data: {
            cmd: 'login',
            type: 'request',
            request: params
        }
    })
};