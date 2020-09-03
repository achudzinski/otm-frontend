import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {TodoList} from "./TodoList";
import {StateType} from "../../../../state/StateType";
import {tasksApiClient} from "../../../../services/api/TasksApiClient";
import {loadTodoLists} from "../../../../state/todo_lists";
import {Spinner} from "../../../global/Spinner";

export interface TodoListContainerProps {
    selectedListId: number|null
}

export const TodoListContainer = ({selectedListId}:TodoListContainerProps) => {
    const todoLists = useSelector((state: StateType) => state.todoLists);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        tasksApiClient
            .getTodoLists()
            .then(todoLists => dispatch(loadTodoLists(todoLists)))
            .then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        isLoaded
            ? <TodoList todoLists={todoLists} selectedListId={selectedListId} />
            : <Spinner />
    );
};
