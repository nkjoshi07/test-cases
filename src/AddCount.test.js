import { shallow, mount } from "enzyme";
import AddCount from "./AddCount";
import App from "./App";



describe.skip('test cases of Add Count Module', () => {

    it("first test case", () => {
        const wrapper = shallow(<AddCount />)
        expect(wrapper.find(".class-0").length).toBe(1)
        wrapper.find("button").simulate("click")            // we can write id or anything instead of button and simulate is use for actions
        wrapper.find("button").simulate("click")
        expect(wrapper.find(".class-2").length).toBe(1)
    })

    it("second test case", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(AddCount).dive().find(".class-0").length).toBe(1)
    })
    // it("third test cases", () => {
    //     const wrapper = shallow(<AddCount />)
    //     expect(wrapper).toMatchSnapshot()
    // })
});

describe('test cases of Add Count Module', () => {

    it("first test case", () => {
        const wrapper = shallow(<AddCount />)
        expect(wrapper.find(".class-0").length).toBe(1)
        wrapper.find("button").simulate("click")            // we can write id or anything instead of button and simulate is use for actions
        wrapper.find("button").simulate("click")
        expect(wrapper.find(".class-2").length).toBe(1)
    })

    it("second test case", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find(AddCount).dive().find(".class-0").length).toBe(1)
    })
    // it("use mount", () => {
    //     const wrapper = mount(<App />)
    //     console.log("df", wrapper.debug())
    // })
});