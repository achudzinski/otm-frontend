import * as React from "react";
import {TasksListContainer} from "./tasks_list/tasks_list/TasksListContainer";
import {InfoAlert} from "../global/InfoAlert";
import {TodoListContainer} from "./tasks_list/todo_lists/TodoListContainer";

export interface TasksListPageProps {
    selectedListId: number|null,
}

export const TasksListPage = ({selectedListId}:TasksListPageProps) => (
    <div>
        <TodoListContainer selectedListId={selectedListId}/>

        {selectedListId
            ? <TasksListContainer selectedListId={selectedListId}/>
            : <InfoAlert>Choose todo list</InfoAlert>
        }
    </div>
);