import * as React from 'react';
import {Spinner} from "../../../src/components/global/Spinner";
import renderer from "react-test-renderer";
import {mount, shallow} from "../../enzyme";
import {act} from 'react-dom/test-utils';

describe("<Spinner />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Spinner />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('it animates', () => {
        jest.useFakeTimers();

        const spinner = mount((<Spinner animationInterval={10000} />));

        expect(spinner.text()).toBe("Loading");

        act(() => { jest.advanceTimersByTime(10000) } );
        expect(spinner.text()).toBe("Loading.");

        act(() => { jest.advanceTimersByTime(10000) } );
        expect(spinner.text()).toBe("Loading..");

        act(() => { jest.advanceTimersByTime(10000) } );
        expect(spinner.text()).toBe("Loading...");

        act(() => { jest.advanceTimersByTime(10000) } );
        expect(spinner.text()).toBe("Loading");
    });
});
