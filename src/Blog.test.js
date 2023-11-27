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
    it("fourth test case",()=>{
        expect(wrapper.find(".my-button").length).toBe(1)
    })
});
