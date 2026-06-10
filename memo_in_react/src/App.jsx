// Property In react: If we have a component in react and that
// multiple child components then even if we are just using the
// state variable in parent and not passing it in as props
// to the children then they will also re-render along with
// the parent component

// For this purpose we use MEMO API that re-renders only the
// parent Component

import { memo , useState , useEffect, Component } from 'react';
import './App.css'

function App() {
  return (
    <Counter />
  )
}

function Counter() {
  const [state , setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState(c => c + 1);
    } , 3000)
  } , [])

  return <div>
    <Increase />
    <Decrease />
    <CurrentCnt />
  </div>
}

const Increase = memo(function() {
  return <div>
    <button>Increase</button>
  </div>
})

const Decrease = memo(function() {
  return <div>
    <button>Decrease</button>
  </div>
})

const CurrentCnt = memo(function() {
  return <div>
    Hi
  </div>
})

export default App