import {combineReducers} from "redux";
import {tasksReducer} from "./tasks";
import {todoListsReducer} from "./todo_lists";

export const rootReducer = combineReducers({
    todoLists: todoListsReducer,
    tasks: tasksReducer,
})
