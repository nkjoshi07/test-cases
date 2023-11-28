import { shallow } from "enzyme"
import News from "./News";

describe('News test cases', () => {

    it("instance in test cases", () => {
        const wrapper = shallow(<News />)
        // console.log("dsf", wrapper.debug())
        const addTwoNumbers = wrapper.instance().addTwoNumbers(2, 3)
        // console.log("addTwoNumbers", addTwoNumbers)
        expect(addTwoNumbers).toBe(5)
    })

    it("test promises", () => {
        const wrapper = shallow(<News />)
        const countDown = wrapper.instance().addCountInTime()
        // console.log("countDown", countDown)
        return countDown.then(data => {
            // console.log("data", data)
            expect(data).toBe(true)
        })
    })

    it("jest spy on ", () => {
        const wrapper = shallow(<News />)
        const instance = wrapper.instance()
        jest.spyOn(instance, "addTwoNumbers")
        wrapper.find("h1").simulate("click")             // function in component did mount has not been counting toHavebeenCalled  
        expect(instance.addTwoNumbers).toHaveBeenCalled()
        expect(instance.addTwoNumbers).toHaveBeenCalledTimes(1)
        expect(instance.addTwoNumbers).toHaveBeenCalledWith(12, 43)  // toHaveBeenCalledWith is use for find parameters value in a function
    })
    it("jest spy on", () => {
        // const wrapper = shallow(<News />)
        // const instance = wrapper.instance()
        jest.spyOn(News.prototype, "componentDidMount")
        shallow(<News />)
        expect(News.prototype.componentDidMount).toHaveBeenCalled()
        expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1)
    })
    it("check state", () => {
        const wrapper = shallow(<News />)
        expect(wrapper.state().addNumbers).toBe(1)   // it will check default value of a state
        wrapper.find("h1").simulate("click")
        expect(wrapper.state().addNumbers).toBe(55);
    })
});

