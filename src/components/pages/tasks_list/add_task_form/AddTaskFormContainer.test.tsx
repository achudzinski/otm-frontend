import * as React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {AddTaskFormContainer} from "./AddTaskFormContainer";
import {rootReducer} from "../../../../state/rootReducer";
import {mount} from "../../../../enzyme";

describe("<AddTaskFormContainer />", () => {

    it('renders correctly', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                tasks: [{id: 1, title: "Task 1", completed: false}, {id: 2, title: "Task 2", completed: true}],
                todoLists: [{id: 1, name: "List A"}]
            }
        });

        const tree = renderer
            .create(<Provider store={store}><AddTaskFormContainer selectedListId={1} /></Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can change value', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                tasks: [{id: 1, title: "Task 1", completed: false}, {id: 2, title: "Task 2", completed: true}],
                todoLists: [{id: 1, name: "List A"}]
            }
        });

        const component = mount(<Provider store={store}><AddTaskFormContainer selectedListId={1} /></Provider>);

        expect(component).toMatchSnapshot();

        component.find('input').simulate('change', {target: {value: "abc"}});
        expect(component).toMatchSnapshot();
    });

});
