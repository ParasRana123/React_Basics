// using useRef hook
// useRef is a way to manipulate the DOM elements
import { useRef , useState } from "react";

function App() {
    const inputRef = useRef();

    // let value = 1;  --> This is very rarely used
    // const [value , setValue] = useState(1);
    // const valueRef = useRef();

    function focusOnInput() {
        // document.getElementById("name").focus();

        // instead of manually accessing the DOM elements we can use a useRef for the same
        inputRef.current.focus();
    }

    return <div>
        Hi There
        <br />
        <input ref={inputRef} id="name" type="text"></input>
        <br />
        <input type="text"></input>
        <br />
        <button onClick={focusOnInput} >Submit</button>
    </div>
}

export default App;