import {HttpApiClient} from "../api/HttpApiClient";
import {ApiError} from "../api/ApiError";
import {config} from "../../config";
import {TodoListType} from "../../models/TodoListType";
import {TaskType} from "../../models/TaskType";

export class TasksApiClient {
    private apiClient: HttpApiClient;

    constructor(apiClient: HttpApiClient) {
        this.apiClient = apiClient;
    }

    getTodoLists(): Promise<TodoListType[]> {
        return this.apiClient
            .sendGet('/todo-lists/all')
            .then(rawResponse => rawResponse.json())
            .then(response => {
                if (response.error) {
                    throw new ApiError(response.error);
                }

                return response.lists;
            })
            .catch(e => {
                if (e instanceof ApiError) {
                    throw e;
                } else {
                    throw new ApiError('unknown', e)
                }
            })
            ;
    }

    getTasksByListId(listId: number): Promise<TaskType[]> {
        return this.apiClient
            .sendGet('/tasks/list', {list: listId})
            .then(rawResponse => rawResponse.json())
            .then(response => {
                if (response.error) {
                    throw new ApiError(response.error);
                }

                return response.tasks;
            })
            .catch(e => {
                if (e instanceof ApiError) {
                    throw e;
                } else {
                    throw new ApiError('unknown', e)
                }
            })
            ;
    }


    addTask(task: TaskType, listId: number): Promise<TaskType> {
        return this.apiClient
            .sendPost('/tasks/create', {}, { title: task.title, list: listId })
            .then(rawResponse => rawResponse.json())
            .then(response => {
                if (response.error) {
                    throw new ApiError(response.error);
                }

                return response.task;
            })
            .catch(e => {
                if (e instanceof ApiError) {
                    throw e;
                } else {
                    throw new ApiError('unknown', e)
                }
            })
            ;
    }

    updateCompletedState(taskId: number, completed: boolean): Promise<boolean> {
        return this.apiClient
            .sendPost('/tasks/update-completed', {}, { id: taskId, completed})
            .then(rawResponse => rawResponse.json())
            .then(response => {
                return true;
            })
            .catch(e => {
                if (e instanceof ApiError) {
                    throw e;
                } else {
                    throw new ApiError('unknown', e)
                }
            })
            ;
    }
}

export const apiClient = new HttpApiClient(config.tasksApiUrl);
export const tasksApiClient = new TasksApiClient(apiClient);