import './App.css'
import { atom , RecoilRoot , useSetRecoilState , useRecoilValue } from "recoil";

const countAtom = atom({
  key: "count",
  default: 0
})

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
  const setCount = useSetRecoilState(countAtom);
  return <div>
      <button onClick={() => setCount(cnt => cnt + 1)}>Increase</button>
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount(cnt => cnt - 1)}>Decrease</button>
  </div>
}

function Value() {
  const count = useRecoilValue(countAtom);
  return <div>
    Count: {count}
  </div>
}

export default App