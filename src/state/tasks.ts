import {TaskType} from "../models/TaskType";

export const LOAD_TASKS = 'LOAD_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_COMPLETED = 'ADD_TASK_COMPLETED';
export const TOGGLE_COMPLETED_STATE = 'TOGGLE_COMPLETED_STATE';
export const SET_COMPLETED_STATE = 'SET_COMPLETED_STATE';

export interface LoadTasksAction {
    type: typeof LOAD_TASKS,
    payload: TaskType[],
}

export interface AddTaskAction {
    type: typeof ADD_TASK,
    payload: TaskType,
}

export interface AddTaskCompletedAction {
    type: typeof ADD_TASK_COMPLETED,
    payload: {
        localId: any,
        task: TaskType,
    },
}

export interface ToggleCompletedStateAction {
    type: typeof TOGGLE_COMPLETED_STATE,
    payload: number,
}

export interface SetCompletedStateAction {
    type: typeof SET_COMPLETED_STATE,
    payload: {taskId: number, completed: boolean},
}



export type TasksActions = LoadTasksAction | AddTaskAction | AddTaskCompletedAction | ToggleCompletedStateAction | SetCompletedStateAction;

export const loadTasks = (tasks: TaskType[]): LoadTasksAction => {
    return {
        type: LOAD_TASKS,
        payload: tasks
    }
};

export const addTask = (task: TaskType): AddTaskAction => {
    return {
        type: ADD_TASK,
        payload: task
    }
};

export const addTaskCompleted = (localId: string, task: TaskType): AddTaskCompletedAction => {
    return {
        type: ADD_TASK_COMPLETED,
        payload: { localId, task }
    }
};

export const toggleCompletedState = (taskId: number): ToggleCompletedStateAction => {
    return {
        type: TOGGLE_COMPLETED_STATE,
        payload: taskId
    }
};

export const setCompletedState = (taskId: number, completed: boolean): SetCompletedStateAction => {
    return {
        type: SET_COMPLETED_STATE,
        payload: {taskId, completed},
    }
};



export const tasksReducer = (state: TaskType[] = [], action: TasksActions) => {
    if (action.type === LOAD_TASKS) {
        return action.payload;
    }

    if (action.type === ADD_TASK) {
        if (state.find(task => task.id !== null && task.id === action.payload.id) === undefined) {
            return state.concat(action.payload);
        }

        return state;
    }

    if (action.type === ADD_TASK_COMPLETED) {
        return state.map(task => task.localId === action.payload.localId ? {...task, id: action.payload.task.id} : task)
    }

    if (action.type === TOGGLE_COMPLETED_STATE) {
        return state.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
    }

    if (action.type === SET_COMPLETED_STATE) {
        return state.map(task => task.id === action.payload.taskId ? {...task, completed: action.payload.completed} : task)
    }

    return state;
};