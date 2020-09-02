import {TaskType} from "../models/TaskType";

export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';

export interface LoadTasksAction {
    type: typeof LOAD_TASKS,
    payload: TaskType[],
}

export interface AddTaskAction {
    type: typeof ADD_TASK,
    payload: TaskType,
}

export type TasksActions = LoadTasksAction | AddTaskAction;

export const loadTasks = (tasks: TaskType[]): LoadTasksAction => {
    return {
        type: LOAD_TASKS,
        payload: tasks
    }
}

export const AddTask = (task: TaskType): AddTaskAction => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const tasksReducer = (state: TaskType[] = [], action: TasksActions) => {
    if (action.type === LOAD_TASKS) {
        return action.payload;
    }

    if (action.type === ADD_TASK) {
        return state.concat(action.payload);
    }

    return state;
};