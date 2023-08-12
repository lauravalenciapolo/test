import { useState } from "react";

const ChildComponent = ({onTextChange}) => {
    const [inputValue, setInputValue] = useState("");
    const handleOnChange = e => {
        setInputValue(e.target.value)
    }
    const handleOnSubmit = () => {
        onTextChange(inputValue)
    }

    return (
        <div>
            <h1>Child Component</h1>
            <input value={inputValue} onChange={handleOnChange}/>
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

export default ChildComponent