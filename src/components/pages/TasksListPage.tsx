import * as React from "react";
import {TasksListContainer} from "./tasks_list/tasks_list/TasksListContainer";
import {InfoAlert} from "../global/InfoAlert";
import {TodoListContainer} from "./tasks_list/todo_lists/TodoListContainer";
import {AddTaskFormContainer} from "./tasks_list/add_task_form/AddTaskFormContainer";
import "./TasksListPage.scss";

export interface TasksListPageProps {
    selectedListId: number|null,
}

export const TasksListPage = ({selectedListId}:TasksListPageProps) => (
    <div className={"tasks-list-page"}>
        <TodoListContainer selectedListId={selectedListId}/>

        {selectedListId
            ? <TasksListContainer selectedListId={selectedListId}/>
            : <InfoAlert>Choose todo list</InfoAlert>
        }

        {selectedListId && <AddTaskFormContainer selectedListId={selectedListId}/>}

    </div>
);