import * as React from 'react';
import renderer from "react-test-renderer";
import {InfoAlert} from "./InfoAlert";

describe("<InfoAlert />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<InfoAlert>Test</InfoAlert>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
