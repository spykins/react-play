import {render, fireEvent, queryByTitle} from "@testing-library/react";
import Login from "./Login";

it('checkLoginRender', () => {
    const {queryByTitle} = render(<Login />);
    const btn = queryByTitle("dummyButton");
    expect(btn).toBeTruthy();
});

describe("clickButton", () => {
    it("onClick", () => {
        const {queryByTitle} = render(<Login />);
        const btn = queryByTitle("dummyButton");
        expect(btn.innerHTML).toBe("Logged In");
        fireEvent.click(btn); 
        expect(btn.innerHTML).toBe("Logged Out");
    })
})
