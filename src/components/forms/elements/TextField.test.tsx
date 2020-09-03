import * as React from 'react';
import {Button} from "./Button";
import renderer from 'react-test-renderer';
import {shallow} from "../../../enzyme";
import {TextField} from "./TextField";

describe("<TextField />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<TextField onChange={() => {}} value={"Abc"} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('informs about changing', () => {
        const mockCallBack = jest.fn();

        const field = shallow((<TextField onChange={mockCallBack} value={"Abc"} />));

        expect(mockCallBack).toBeCalledTimes(0);
        field.find('input').simulate('change', {target: { value: "Abcd"}});

        expect(mockCallBack).toBeCalledTimes(1);
        expect(mockCallBack).toBeCalledWith("Abcd");
    });

    it('informs about key down', () => {
        const mockOnChange = jest.fn();
        const mockOnKeyDown = jest.fn();

        const field = shallow((<TextField onChange={mockOnChange} onKeyDown={mockOnKeyDown} value={"Abc"} />));

        expect(mockOnKeyDown).toBeCalledTimes(0);
        field.find('input').simulate('keyDown', {key: 'Enter'});

        expect(mockOnKeyDown).toBeCalledTimes(1);
        expect(mockOnKeyDown).toBeCalledWith("Enter");
    });
});
