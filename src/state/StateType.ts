import {TaskType} from "../models/TaskType";
import {TodoListType} from "../models/TodoListType";

export interface StateType {
    todoLists: TodoListType[],
    tasks: TaskType[]
}