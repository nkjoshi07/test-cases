import { shallow } from "enzyme";
import AddCount from "./AddCount";
import App from "./App";



const wrapper = shallow(<AddCount />)
describe('test cases of Add Count Module', () => {

    it("first test case", () => {
        expect(wrapper.find(".class-0").length).toBe(1)
        wrapper.find("button").simulate("click")            // we can write id or anything instead of button and simulate is use for actions
        wrapper.find("button").simulate("click")
        expect(wrapper.find(".class-2").length).toBe(1)
    })

    it("second test case", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(AddCount).dive().find(".class-0").length).toBe(1)
    })
});
