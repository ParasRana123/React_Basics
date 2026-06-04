import { useState , useEffect } from "react";

function App() {
    const [count , setCount] = useState(0);

    function increaseCnt() {
        setCount(count => count + 1);
    }

    // if we want to use a state variable inside a useEffect we need to put it inside the dependency array
    // if we have nothing inside the dependency array then the useEffect hook runs only on when the component is mounted.
    useEffect(() => {
        console.log("above set interval");
        setInterval(increaseCnt , 1000);
    } , []);

    // Anytime the count changes this useEffect runs
    useEffect(() => {
        console.log("the count has been updated to: " + count);
        
    } , [count])

    return <div>
        {count}
    </div>
}

export default App;