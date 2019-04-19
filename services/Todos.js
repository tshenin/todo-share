import { request } from './request';

export const getTodosByBoard = async (id) => {
    try {
        const response = await request('GET', `todos?board=${id}`);
        return response.data.data;
    } catch (e) {
        console.error(e);
    }
};

export const addTodo = async (data) => {
    try {
        const response = await request('POST', 'todos', data);
        return response.data.data[0];
    } catch (e) {
        console.error(e);
    }
};
