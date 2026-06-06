import './App.css'
import { useState } from "react";

// made a custom hook to manage the count state and the function to increase it
function useCounter() {
  const [count , setCount] = useState(0);
  function increaseCnt() {
    setCount(c => c + 1);
  }
  return {
    count: count,
    increaseCnt: increaseCnt
  }
}

function App() {
  return <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
}

function Counter() {
  const {count , increaseCnt} = useCounter();
  return <div>
    <button onClick={increaseCnt}>Increase {count}</button>
  </div>
}

export default App