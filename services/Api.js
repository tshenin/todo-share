import { request } from './request';

export const getBoards = async () => {
    try {
        const response = await request('GET', 'boards');
        return response.data.data;
    } catch (e) {
        throw (e);
    }
}

export const getTodosByBoard = (id) => [];