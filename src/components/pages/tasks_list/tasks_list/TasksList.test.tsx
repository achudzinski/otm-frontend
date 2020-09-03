import * as React from 'react';
import renderer from 'react-test-renderer';
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../../../state/rootReducer";
import {TasksList} from "./TasksList";

describe("<TasksList />", () => {
    it('renders correctly', () => {
        const store = configureStore({
            reducer: rootReducer
        });

        const tasks = [{id: 1, localId: "", title: "Task 1", completed: false}, {id: 2, localId: "", title: "Task 2", completed: true}];

        const tree = renderer
            .create(<TasksList tasks={tasks} onTaskCompletedClick={() => {}}/>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
