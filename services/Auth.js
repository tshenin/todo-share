import { request } from './request';

export const getAuthStatus = async () => {
    const response = await request('GET', 'auth/status');
    return response.data.id;
};
