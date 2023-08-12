import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("<Counter/>", ()=>{
    test("renders the counter component", ()=>{
        // Arrange
        render(<Counter />);

        // Act
        const countElement = screen.getByText(/Count:/i);
        const buttonElement = screen.getByText(/Increment/i);

        // Assert
        expect(countElement).toBeInTheDocument(); //Verifica que se esté renderizando el elemento count con el texto count 
        expect(buttonElement).toBeInTheDocument(); 
    })
    test("increments the count when the button is clicked", ()=>{
        // Arrange
        render(<Counter />);
        const buttonElement = screen.getByText(/Increment/i);

        // Act
        fireEvent.click(buttonElement);

        // Assert
        const countElement = screen.getByText(/Count:1/i)
        expect(countElement).toBeInTheDocument();
    })

    test("sumar", ()=>{
        // Arrange
        const n1 = 1;
        const n2 = 2;

        // Act
        const result = sum(1,2);

        // Assert
        expect(result).toBe(3)
    })
})


// Test Driven Development
function sum(i, j){
    return i+j;
}