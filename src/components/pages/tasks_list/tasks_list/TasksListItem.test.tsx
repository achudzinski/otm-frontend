import * as React from 'react';
import renderer from 'react-test-renderer';
import {TasksListItem} from "./TasksListItem";
import {shallow} from "../../../../enzyme";
import {TextField} from "../../../forms/elements/TextField";

describe("<TasksListItem />", () => {
    it('renders correctly with completed task', () => {
        const tree = renderer
            .create(<TasksListItem task={{localId: "", id: 1, title: "Task A", completed: true}} onTaskCompletedClick={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with uncompleted task', () => {
        const tree = renderer
            .create(<TasksListItem task={{localId: "", id: 1, title: "Task A", completed: false}} onTaskCompletedClick={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with unsaved task', () => {
        const tree = renderer
            .create(<TasksListItem task={{localId: "test", id: null, title: "Task A", completed: false}} onTaskCompletedClick={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('informs about togging status', () => {
        const mockCallback = jest.fn();

        const field = shallow((<TasksListItem task={{localId: "", id: 1, title: "Task A", completed: true}} onTaskCompletedClick={mockCallback} />));

        expect(mockCallback).toBeCalledTimes(0);
        field.find('button').simulate('click');

        expect(mockCallback).toBeCalledTimes(1);
        expect(mockCallback).toBeCalledWith(1);
    });

});
