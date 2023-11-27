import { shallow } from "enzyme";
import Blog from "./Blog";

const wrapper = shallow(<Blog />)

describe('blog test file', () => {
    it("first test case", () => {
        expect(wrapper.exists(".licls")).toBe(true)
    })
    it("second test case", () => {
        expect(wrapper.exists(".my-button")).toBe(true)
    })
    it("third test case", () => {
        expect(wrapper.find(".my-button").length).toBe(1)
    })
    it("fourth test case", () => {
        expect(wrapper.find(".my-button").length).toBe(1)
    })
    it("fifth test case", () => {
        expect(wrapper.find(".licls").at(0).key()).toBe("angular")  // find key return array related to define class
    })
    it("sixth test case", () => {
        expect(wrapper.find(".number").childAt(0).type()).toBe("span")
    })
    it("find children length", () => {
        expect(wrapper.find(".maincls").children().length).toBe(3)
    })
    it("find children length2", () => {
        expect(wrapper.find(".licls").children().length).toBe(3)
    })
    it("check hasClass", () => {
        expect(wrapper.find(".my-button").hasClass("button")).toBe(true)
    })
    it("isCheck classes", () => {
        expect(wrapper.is(".maincls")).toBe(true)
    })
});
