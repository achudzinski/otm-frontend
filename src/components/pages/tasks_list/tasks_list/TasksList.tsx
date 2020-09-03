import * as React from "react";
import {TaskType} from "../../../../models/TaskType";
import {TasksListItem} from "./TasksListItem";
import "./TasksList.scss";

export interface TasksListProps {
    tasks: TaskType[],
    onTaskCompletedClick: (taskId:number|null) => void,
}

export const TasksList = ({tasks, onTaskCompletedClick}:TasksListProps) => {
    return (
        <div className={"tasks-list"}>
            {tasks.map(
                task => <TasksListItem task={task} key={task.id} onTaskCompletedClick={onTaskCompletedClick} />
            )}
        </div>
    );
};
