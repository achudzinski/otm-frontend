import * as React from "react";
import {TodoListContainer} from "./tasks_list/TodoListContainer";

export interface TasksListPageProps {
    selectedListId: number|null,
}

export const TasksListPage = ({selectedListId}:TasksListPageProps) => (
    <div>
        <TodoListContainer selectedListId={selectedListId}/>
    </div>
);