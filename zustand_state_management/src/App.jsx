import { create } from "zustand"

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1}))
}))

function App() {

  return <div>
    <Counter />
  </div>

}

function Counter() {
  return <div>
    <Increase />
    <Decrease/>
    <DisplayCount />
  </div>
}

function Increase() {
  const increment = useStore((state) => state.increment);
  return <div>
    <button onClick={increment}>Increase</button>
  </div>
}

function Decrease() {
  const decrement = useStore((state) => state.decrement);
  return <div>
    <button onClick={decrement}>Decrease</button>
  </div>
}

function DisplayCount() {
  const count = useStore((state) => state.count);
  return <div>
    Count: {count}
  </div>
}

export default App;