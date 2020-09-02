import {TodoListType} from "../models/TodoListType";

export const LOAD_TODO_LISTS = 'LOAD_TODO_LISTS';

export interface LoadTodoListsAction {
    type: typeof LOAD_TODO_LISTS,
    payload: TodoListType[],
}

export type TodoListsActions = LoadTodoListsAction;

export const loadTodoLists = (lists: TodoListType[]): TodoListsActions => {
    return {
        type: LOAD_TODO_LISTS,
        payload: lists
    }
}

export const todoListsReducer = (state: TodoListType[] = [], action: TodoListsActions) => {
    if (action.type === LOAD_TODO_LISTS) {
        return action.payload;
    }

    return state;
};