import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {StateType} from "../../../../state/StateType";
import {tasksApiClient} from "../../../../services/api/TasksApiClient";
import {addTask, loadTasks, setCompletedState, toggleCompletedState} from "../../../../state/tasks";
import {Spinner} from "../../../global/Spinner";
import {TasksList} from "./TasksList";
import {
    broadcastTaskCompletedChanged,
    CompletedChangedCallbackType,
    joinListChannel,
    leaveUserChannel,
    registerOnCompletedChangedCallback,
    registerOnTaskAddedCallback,
    unregisterOnCompletedChangedCallback,
    unregisterOnTaskAddedCallback
} from "../../../../services/notifications";

export interface TasksListContainerProps {
    selectedListId: number
}

export const TasksListContainer = ({selectedListId}:TasksListContainerProps) => {
    const tasks = useSelector((state: StateType) => state.tasks);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => { // initial load of tasks
        setIsLoaded(false);
        tasksApiClient
            .getTasksByListId(selectedListId)
            .then(tasks => dispatch(loadTasks(tasks)))
            .then(() => setIsLoaded(true));
    }, [selectedListId, dispatch]);

    const handleOnTaskAddedNotificationReceived:CompletedChangedCallbackType = (data) => {
        console.log(data, selectedListId);
        if (selectedListId !== data.listId) {
            return;
        }

        dispatch(addTask(data.task));
    };

    const handleOnCompletedChangedNotificationReceived:CompletedChangedCallbackType = (data) => {
        if (selectedListId !== data.listId) {
            return;
        }

        if (!data.task.id) {
            return;
        }

        dispatch(setCompletedState(data.task.id, data.task.completed));
    };

    useEffect(() => {
        joinListChannel(selectedListId)
        registerOnTaskAddedCallback(handleOnTaskAddedNotificationReceived);
        registerOnCompletedChangedCallback(handleOnCompletedChangedNotificationReceived);
        return () => {
            leaveUserChannel(selectedListId);
            unregisterOnTaskAddedCallback(handleOnTaskAddedNotificationReceived);
            unregisterOnCompletedChangedCallback(handleOnCompletedChangedNotificationReceived);
        };
    }, [selectedListId]);



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
            .then(() => broadcastTaskCompletedChanged({...task, completed: completed}, selectedListId))
            .catch(() => { /* todo inform about error */})
    };

    return (
        isLoaded
            ? <TasksList tasks={tasks} onTaskCompletedClick={handleUpdateCompletedState} />
            : <Spinner />
    );
};
