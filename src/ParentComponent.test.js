import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "./ParentComponent";

describe("<ParentComponent/>", ()=>{
    test("renders the counter component", ()=>{
        render(<ParentComponent />);
        const inputElement = screen.getByRole("textbox");
        const submitButton = screen.getByRole("button", {name: /Submit/i});

        fireEvent.change(inputElement, {target: {value: "hello"}})
        fireEvent.click(submitButton)

        const updatedText = screen.getByText(/Text: hello/i)
        expect(updatedText).toBeInTheDocument();
    })
})