// usePrev hook 
import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function App() {
    const [state , setState] = useState(0);
    const prev = usePrev(state);
    return (
        <>
          <div>{state}</div>
          <button onClick={() => {setState(c => c + 1)}}>Increase</button>
          <div>{prev}</div>
        </>
    )
}

export default App;