import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {StateType} from "../../../../state/StateType";
import {tasksApiClient} from "../../../../services/api/TasksApiClient";
import {loadTasks, toggleCompletedState} from "../../../../state/tasks";
import {Spinner} from "../../../global/Spinner";
import {TasksList} from "./TasksList";

export interface TasksListContainerProps {
    selectedListId: number
}

export const TasksListContainer = ({selectedListId}:TasksListContainerProps) => {
    const tasks = useSelector((state: StateType) => state.tasks);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoaded(false);
        tasksApiClient
            .getTasksByListId(selectedListId)
            .then(tasks => dispatch(loadTasks(tasks)))
            .then(() => setIsLoaded(true));
    }, [selectedListId, dispatch]);

    const handleUpdateCompletedState = (taskId: number|null) => {
        if (!taskId) {
            return;
        }

        const task = tasks.find(task => task.id === taskId);
        if (!task || !task.id) {
            return;
        }

        const completed = !task.completed;
        dispatch(toggleCompletedState(task.id));
        tasksApiClient.updateCompletedState(task.id, completed)
            .catch(() => { /* todo inform about error */})
    };

    return (
        isLoaded
            ? <TasksList tasks={tasks} onTaskCompletedClick={handleUpdateCompletedState} />
            : <Spinner />
    );
};
