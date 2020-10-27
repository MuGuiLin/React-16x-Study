import request from '@/utils/request';

export interface AgencyParams {
    fid: number;
};
export async function GetAgency(params: AgencyParams) {
    return await request('/index.php?controller=org&action=getOrganization', {
        method: 'GET',
        params: params
    })
};