import { request } from './request';

export const getTodosByBoard = async (id) => {
    const response = await request('GET', `todos?board=${id}`);
    return response.data.data;
};

export const addTodo = async (data) => {
    const response = await request('POST', 'todos', data);
    return response.data.data[0];
};

export const deleteTodo = async (id) => {
    const response = await request('DELETE', `todos/${id}`);
    return response.data.data;
};

export const updateTodoById = async (id, data) => {
    const response = await request('PUT', `todos/${id}`, data);
    return response.data.data[0];
};
