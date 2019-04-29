import { request } from './request';

export const getAuthStatus = async () => {
    const response = await request('GET', 'auth/status');
    return response.data.id;
};

export const signIn = async (data) => {
    const response = await request('POST', 'auth/login', data, true);
    return response.data;
};

export const signUp = async (data) => {
    const response = await request('POST', 'auth/register', data);
    return response.data;
};
