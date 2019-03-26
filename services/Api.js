import { request } from './request';

export const getBoards = async () => {
    try {
        const response = await request('GET', 'boards');
        return response.data.data;
    } catch (e) {
        throw (e);
    }
}

export const getTodosByBoard = async id => {
    try {
        const response = await request('GET', `todos?board=${id}`);
        return response.data.data;
    } catch (e) {
        throw (e);
    }
};