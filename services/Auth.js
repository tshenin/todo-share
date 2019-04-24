import { request } from './request';

export const getAuthStatus = async () => {
    const response = await request('GET', 'auth/status');
    return response.data.id;
};

export const signIn = async data => {
    const response = await request('GET', 'auth/status', data, true);
    console.log(response.data);
    return response.data.id;
};
