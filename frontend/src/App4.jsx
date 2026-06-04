function App() {
    return <div>
        <Card1 />
        <Card2 />
    </div>
}

function Card1() {
    return <div style={{ background: "red" , borderRadius: 20 , padding: 20 }} >
        Hi there
    </div>
}

function Card2() {
    return <div style={{ background: "red" , borderRadius: 20 , padding: 20 , margin: 20 }} >
        Hello there
    </div>
}

export default App;