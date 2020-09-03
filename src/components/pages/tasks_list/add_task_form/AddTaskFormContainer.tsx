import * as React from "react";
import {useDispatch} from "react-redux";
import "./AddTaskForm.scss";
import {useState} from "react";
import {TextField} from "../../../forms/elements/TextField";
import {Button} from "../../../forms/elements/Button";
import {tasksApiClient} from "../../../../services/api/TasksApiClient";
import {addTask, addTaskCompleted} from "../../../../state/tasks";
import {TaskType} from "../../../../models/TaskType";
import {v4 as uuidv4} from "uuid";

export interface AddTaskFormContainerProps {
    selectedListId: number
}

export const AddTaskFormContainer = ({selectedListId}:AddTaskFormContainerProps) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [titleInvalid, setTitleInvalid] = useState(false);

    const handleOnChange = (newTitle:string) => {
        setTitle(newTitle);
        setTitleInvalid(false);
    }

    const handleOnAddTask = () => {
        if (title.trim() === '') {
            setTitleInvalid(true);
            return;
        }

        const localId = uuidv4();
        setTitle("");
        const task:TaskType = {
            localId: localId,
            id: null,
            title,
            completed: false
        };

        dispatch(addTask(task));

        tasksApiClient.addTask(task, selectedListId)
            .then(addedTask => dispatch(addTaskCompleted(localId, addedTask)))
            .catch(() => { /* todo inform about error */ })
    };

    return (
        <div className={"add-task-form"}>
            <TextField onChange={handleOnChange} isInvalid={titleInvalid}  onKeyDown={key => key === 'Enter' ? handleOnAddTask() : null} value={title} />
            <Button onClick={handleOnAddTask}>Add</Button>
        </div>
    );
};