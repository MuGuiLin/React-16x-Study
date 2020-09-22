import request from '@/utils/request';

export async function getUserInfo(): Promise<any> {

    const req = await request('/api/currentUser');
    // console.log(req);
    return req;
};

export async function getUserDetail(): Promise<any> {

    return await request('/api/getUserDetail');
};

export async function UserLogout(): Promise<any> {

    return await request('/api/logout');
};