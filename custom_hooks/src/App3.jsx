import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce"

function App() {
    // function sendDataToBackend() {
    //     fetch("api.amazon.com/search");
    // }

    // const debouncedFn = useDebounce(sendDataToBackend);
    const [inputVal , setInputVal] = useState("");
    const debouncedVal = useDebounce(inputVal , 200);

    function change(e) {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        console.log("expensive operation")
    } , [debouncedVal])

    return (    
        <>
           <input type="text" onChange={change}></input>
        </>
    )
}

export default App;