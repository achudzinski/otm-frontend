import * as React from "react";
import {TodoListItem} from "./TodoListItem";
import {TodoListType} from "../../../models/TodoListType";
import "./TodoList.scss";

export interface TodoListProps {
    todoLists: TodoListType[],
    selectedListId: number|null,
}

export const TodoList = ({todoLists, selectedListId}:TodoListProps) => {
    return (
        <div className={"todo-list"}>

            {todoLists.map(
                list => <TodoListItem isSelected={list.id === selectedListId} todoList={list} key={list.id} />
            )}

            {/*{loadingError && <UserListErrorAlert>loading error</UserListErrorAlert>}*/}
        </div>
    );
};
