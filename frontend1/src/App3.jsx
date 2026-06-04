import { useEffect, useState } from "react";

function App() {
    return <div>
        <Timer />
    </div>
}

const Timer = () => {
    const [sec , setSec] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSec(sec => sec + 1);
        } , 1000);

        return () => {
            clearInterval();
        }
        
    } , [])

    return <div>{sec} seconds elapsed</div>
}

export default App;