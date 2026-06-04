// function App() {
//     return <div style={{ display: "flex" }}>
//         <Card children={"Hi there"}/>
//         <Card children={<div style={{ color: "green" }}>
//             What do you want to post
//             <br />
//             <br />
//             <input type="text" />
//             </div>} />
//     </div>
// }

// The above Card component can be used as a wrappper that makes the props inside it more readable
function App() {
    return <div style={{ display: "flex" , background: "gray" }}>
        <Card>
            <div style={{ color: "green" }}>
                What do you want to post
                <br />
                <br />
                <input type="text"/>
            </div>
        </Card>
        <Card>
            Hi there
        </Card>
    </div>
}

function Card({ children }) {
    return <div style={{ background: "white" , borderRadius: 10 , color: "black" , padding: 10 , margin: 10 }}>
        {children}
    </div>
}

export default App;