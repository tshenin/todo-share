import { request } from './request';

export const getBoards = async () => {
    try {
        const response = await request('GET', 'boards');
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const getBoardById = async (id) => {
    try {
        const response = await request('GET', `boards/${id}`);
        return response.data.data[0];
    } catch (e) {
        console.error(e);
    }
};

export const updateBoardById = async (id, data) => {
    try {
        const response = await request('PUT', `boards/${id}`, data);
        return response.data.data[0];
    } catch (e) {
        console.error(e);
    }
};

export const addBoard = async (data) => {
    try {
        const response = await request('POST', 'boards', data);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const deleteBoard = async (id) => {
    try {
        const response = await request('DELETE', `boards/${id}`);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};
