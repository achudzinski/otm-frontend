import * as React from 'react';
import renderer from 'react-test-renderer';
import {App} from "./App";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../state/rootReducer";

describe("<App />", () => {
    it('renders correctly', () => {
        const store = configureStore({
            reducer: rootReducer
        });

        const tree = renderer
            .create(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
