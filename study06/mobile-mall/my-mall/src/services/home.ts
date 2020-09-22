import request from '@/utils/request';

export async function getRecommend(): Promise<any> {

    const req = await request('/api/getRecommend');
    // console.log(req);
    return req;
};

