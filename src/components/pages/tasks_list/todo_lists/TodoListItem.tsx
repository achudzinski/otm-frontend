import * as React from "react";
import {Link} from "react-router-dom";
import "./TodoListItem.scss";
import {TodoListType} from "../../../../models/TodoListType";
import {getUrlToTasksList} from "../../../../services/urlManager";
import {classNames} from "../../../../services/classNames";

export interface TodoListItemProps {
    todoList: TodoListType,
    isSelected: boolean,
};

export const TodoListItem = ({todoList, isSelected}: TodoListItemProps) => (
    <div className={"todo-list-item"}>
        <Link to={getUrlToTasksList(todoList.id)} className={classNames(["btn", isSelected ? "btn-success" : "btn-secondary"])}>
            {todoList.name}
        </Link>
    </div>
);