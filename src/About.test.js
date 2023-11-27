import { shallow } from "enzyme";
import About from "./About";



describe('About file test', () => {
    it("test cases", () => {
        const wrapper = shallow(<About />)
        // console.log("hhh", wrapper.debug())            // debug is use for getting html content of whole page 
        expect(wrapper.exists(".divClass")).toBe(true)   // exists is use for check class from whole page 
    })
});
