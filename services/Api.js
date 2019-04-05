import { request } from './request';

export const getBoards = async () => {
    try {
        const response = await request('GET', 'boards');
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
}

export const getTodosByBoard = async id => {
    try {
        const response = await request('GET', `todos?board=${id}`);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const addBoard = async data => {
    try {
        const response = await request('POST', 'boards', data);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const addTodo = async data => {
    try {
        const response = await request('POST', 'todos', data);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const deleteBoard = async id => {
    try {
        const response = await request('DELETE', `boards/${id}`);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};
