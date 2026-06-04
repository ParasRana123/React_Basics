// Rolling up the state variable

import { useState , createContext , useContext } from "react";
import './App.css'

const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn , setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
   </BulbContext.Provider>
  )
}

// Prop Drilling - when we have to pass the state variable and the state update function through multiple levels of components, it can become cumbersome and lead to "prop drilling". This is when we have to pass props through multiple levels of components that do not need them, just to get them to the component that does need them.
function App() {
  return <div>
    <BulbProvider>
      <Light />
    </BulbProvider>
  </div>
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb ON" : "Bulb OFF"}
  </div>
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);
  return <div>
    <button onClick={() => {setBulbOn(e => !e)}}>Toggle the Bulb</button>
  </div>
}

export default App