import { useState , useEffect } from "react";

function App() {
    const [currentTab , setCurrentTab] = useState(1);
    const [data , setData] = useState({});
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        console.log("send requests to the backend to get the data for the tab: " + currentTab);
        fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
        .then(async res => {
            const json = await res.json();
            setData(json);
            setLoading(false);
        })
    } , [currentTab])

    return <div>
        <button onClick = {() => setCurrentTab(currentTab => 1)} style={{ color: currentTab == 1 ? "red" : "black" }}>Todo #1</button>
        <button onClick={() => setCurrentTab(currentTab => 2)} style={{ color: currentTab == 2 ? "red" : "black" }}>Todo #2</button>
        <button onClick={() => setCurrentTab(currentTab => 3)} style={{ color: currentTab == 3 ? "red" : "black" }}>Todo #3</button>
        <button onClick={() => setCurrentTab(currentTab => 4)} style={{ color: currentTab == 4 ? "red" : "black" }}>Todo #4</button>
        <br />
        {loading ? "Loading..." : data.title}
    </div>
}

export default App;