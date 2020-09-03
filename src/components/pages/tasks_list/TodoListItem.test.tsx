import * as React from 'react';
import renderer from 'react-test-renderer';
import {TodoListItem} from "./TodoListItem";
import {App} from "../../app/App";
import {MemoryRouter} from "react-router";

describe("<TodoListItem />", () => {
    it('renders correctly when not selected', () => {
        const tree = renderer
            .create(<MemoryRouter><TodoListItem todoList={{id: 1, name: "List A"}} isSelected={false}/></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when selected', () => {
        const tree = renderer
            .create(<MemoryRouter><TodoListItem todoList={{id: 1, name: "List A"}} isSelected={true}/></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
