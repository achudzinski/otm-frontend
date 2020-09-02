import {StateType} from "./StateType";

export const getInitialState = ():StateType => {
    return {
        todoLists: [],
        tasks: [],
    };
}

