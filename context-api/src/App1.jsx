import { useState, createContext, useContext } from "react";

const CountContext = createContext();

function CountContextProvider({ children }) {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

function App() {
    return (
        <div>
            <Parent />
        </div>
    );
}

function Parent() {
    return (
        <CountContextProvider>
            <Increase />
            <Decrease />
            <Value />
        </CountContextProvider>
    );
}

function Increase() {
    const { setCount } = useContext(CountContext);
    return (
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    );
}

function Decrease() {
    const { setCount } = useContext(CountContext);
    return (
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    );
}

function Value() {
    const { count } = useContext(CountContext);
    return <div>Count: {count}</div>;
}

export default App;