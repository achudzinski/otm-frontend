import * as React from "react";
import {TaskType} from "../../../../models/TaskType";
import "./TasksListItem.scss";
import {classNames} from "../../../../services/classNames";

export interface TasksListItemProps {
    task: TaskType,
    onTaskCompletedClick: (taskId:number) => void,
};

export const TasksListItem = ({task, onTaskCompletedClick}: TasksListItemProps) => (
    <div className={classNames(["tasks-list-item card", task.completed && 'bg-success'])}>
        <div className="card-body">
            {task.title}
            <button onClick={() => onTaskCompletedClick(task.id)}>{task.completed ? 'cancel' : 'done'}</button>
        </div>
    </div>
);