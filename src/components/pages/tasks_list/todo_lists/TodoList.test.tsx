import * as React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";
import {TodoList} from "./TodoList";

const list = [
    {id: 1, name: "List A"},
    {id: 2, name: "List B"},
    {id: 3, name: "List C"},
]

describe("<TodoList />", () => {
    it('renders correctly empty list', () => {
        const tree = renderer
            .create(<MemoryRouter><TodoList todoLists={[]} selectedListId={null} /></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly list without selected item', () => {
        const tree = renderer
            .create(<MemoryRouter><TodoList todoLists={list} selectedListId={null} /></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly list with selected item', () => {
        const tree = renderer
            .create(<MemoryRouter><TodoList todoLists={list} selectedListId={2} /></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
