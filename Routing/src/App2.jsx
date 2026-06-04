// Building a clock with start and stop button using the 3 methods
// 1. let value = 1;  --> This is very rarely used
// 2. const [value , setValue] = useState(1); --> causes an extra re-render
// 3. const valueRef = useRef();

import { useState , useRef } from "react";

function App() {
    const [currentCnt , setCurrentCnt] = useState(0);
    // let timer = 0;
    // const [timer , setTimer] = useState(0);
    const timer = useRef();

    function startClock() {
        let value = setInterval(() => {
            setCurrentCnt(c => c + 1);
        } , 1000)
        timer.current = value;
    }

    function stopClock() {
        clearInterval(timer);
    }

    return <div>
        Hi there
        {currentCnt}
        <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
}

export default App;