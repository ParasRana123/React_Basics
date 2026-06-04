import { useEffect, useState } from "react";

export default function App() {
    const [count , setCount] = useState(0);

    function increaseCount() {
        setCount(count => count + 1);
    }

    return <div>
        <Counter count={count}/>
        <button onClick={increaseCount}>Increase Counter</button>
    </div>
}

function Counter(props) {

    // if nothing changes run this code.
    useEffect(() => {
        console.log("On Mount");
        return function() {
            console.log("On unmount");
        }
    } , []);

    // if count changes run this code.
    // now for the first time first console gets logged and again when the count value in the props changes first the cleanup of the first values happens and then the console gets logged for the new value of count.
    useEffect(() => {
        console.log("count has changed");

        return function() {
            console.log("cleanup inside the second useEffect");
        }

    } , [props.count]);

    return <div>
        <h1>Counter: {props.count}</h1>
    </div>
}