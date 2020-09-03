import io from 'socket.io-client';
import {config} from "../config";
import {TaskType} from "../models/TaskType";

const socket = io(config.socketIoServer, {
    'reconnection': true,
    'reconnectionDelay': 1000,
    'reconnectionDelayMax' : 5000,
    'reconnectionAttempts': 20
});

/******************************************************************************/
/* CHANNELS */

export const joinListChannel = (listId:number) => {
    socket.emit('join-list', {id: listId});
};

export const leaveUserChannel = (listId:number) => {
    socket.emit('leave-list', {id: listId});
};

/******************************************************************************/
/* BROADCAST NOTIFICATIONS */

export const broadcastTaskAdded = (task: TaskType, listId: number) => {
    socket.emit('task-added', { task, listId });
};

export const broadcastTaskCompletedChanged = (task: TaskType, listId: number) => {
    socket.emit('task-completed-changed', { task, listId });
};


/******************************************************************************/
/* REGISTER LISTENERS */

export type TaskAddedCallbackType = (data:{task:TaskType, listId: number}) => void;

export const registerOnTaskAddedCallback = (callback:TaskAddedCallbackType) => {
    socket.on('task-added', callback);
};

export const unregisterOnTaskAddedCallback = (callback:TaskAddedCallbackType) => {
    socket.removeEventListener('task-added', callback);
};

export type CompletedChangedCallbackType = (data:{task:TaskType, listId: number}) => void;

export const registerOnCompletedChangedCallback = (callback:CompletedChangedCallbackType) => {
    socket.on('task-completed-changed', callback);
};

export const unregisterOnCompletedChangedCallback = (callback:CompletedChangedCallbackType) => {
    socket.removeEventListener('task-completed-changed', callback);
};


