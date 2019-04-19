import { request } from './request';

export const getTodosByBoard = async (id) => {
    const response = await request('GET', `todos?board=${id}`);
    return response.data.data;
};

export const addTodo = async (data) => {
    const response = await request('POST', 'todos', data);
    return response.data.data[0];
};
