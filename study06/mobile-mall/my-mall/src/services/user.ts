import request from '@/utils/request';

export async function getUserInfo(): Promise<any> {

    const req = await request('/api/currentUser');
    
    // console.log(req);

    return req;
};