import * as React from 'react';
import {Button} from "./Button";
import renderer from 'react-test-renderer';
import {shallow} from "../../../enzyme";

describe("<Button />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Button onClick={() => {
            }}>Test 123</Button>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('it can be clicked', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));

        expect(mockCallBack).toBeCalledTimes(0);
        button.simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });
});
