// @ts-nocheck
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
