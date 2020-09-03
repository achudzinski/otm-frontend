import * as React from "react";
import {TaskType} from "../../../../models/TaskType";
import "./TasksListItem.scss";
import {classNames} from "../../../../services/classNames";

export interface TasksListItemProps {
    task: TaskType,
    onTaskCompletedClick: (taskId:number|null) => void,
};

export const TasksListItem = ({task, onTaskCompletedClick}: TasksListItemProps) => (
    <div className={classNames(["tasks-list-item card", task.completed && 'bg-success', !task.id && 'tasks-list-item--not-saved'])}>
        <div className="card-body">
            {task.title}
            {task.id && <button onClick={() => onTaskCompletedClick(task.id)}>{task.completed ? 'cancel' : 'done'}</button>}
        </div>
    </div>
);