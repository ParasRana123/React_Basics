import './App.css'
import { RecoilRoot , useSetRecoilState , useRecoilValue } from "recoil";
import { counterAtom } from './store/atom/counter';

function App() {
  return <div>
    <Parent />
  </div>
}

function Parent() {
  return <div>
    <RecoilRoot>
        <Increase />
        <Decrease />
        <Value />
    </RecoilRoot>
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <div>
      <button onClick={() => setCount(cnt => cnt + 1)}>Increase</button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <div>
    <button onClick={() => setCount(cnt => cnt - 1)}>Decrease</button>
  </div>
}

function Value() {
  const count = useRecoilValue(counterAtom);
  return <div>
    Count: {count}
  </div>
}

export default App