import request from '@/utils/request';

export interface UserLgonFormParams {
    username: string;
    password: string;
}
export async function UserLgonForm(params: UserLgonFormParams): Promise<any> {

    return await request('/api/login', {
        method: 'POST',
        data: params
    });
};