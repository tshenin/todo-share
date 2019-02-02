import { boards, todos } from './mocks';

export const getBoards = () => boards;

export const getTodosByBoard = (id) => todos[id];