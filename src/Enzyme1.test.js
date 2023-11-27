import { shallow } from 'enzyme';
import Enzyme1 from './Enzyme1';


describe('use Enzyme first time', () => {

    it("first test", () => {
        const wrapper = shallow(<Enzyme1 />)
        // console.log(wrapper.debug())
        expect(wrapper.exists("#enzyme1")).toBe(true)
    })
});
 