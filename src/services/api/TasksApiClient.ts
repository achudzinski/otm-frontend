import {HttpApiClient} from "../api/HttpApiClient";
import {ApiError} from "../api/ApiError";
import {config} from "../../config";
import {TodoListType} from "../../models/TodoListType";

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
}

export const apiClient = new HttpApiClient(config.tasksApiUrl);
export const tasksApiClient = new TasksApiClient(apiClient);