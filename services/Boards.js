import { request } from './request';

export const getBoards = async () => {
    const response = await request('GET', 'boards');
    return response.data.data;
};

export const getBoardById = async (id) => {
    const response = await request('GET', `boards/${id}`);
    return response.data.data[0];
};

export const updateBoardById = async (id, data) => {
    const response = await request('PUT', `boards/${id}`, data);
    return response.data.data[0];
};

export const addBoard = async (data) => {
    const response = await request('POST', 'boards', data);
    return response.data.data[0];
};

export const deleteBoard = async (id) => {
    const response = await request('DELETE', `boards/${id}`);
    return response.data.data;
};
