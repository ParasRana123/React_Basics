const App = () => {
    const todos = [{
        title: "React",
        done: true
    } , {
        title: "Node",
        done: false
    }]

    const todoComponents = todos.map(todo => <Todo title={todo.title} done={todo.done} />)
    return <div>
        {todoComponents}
    </div>
}

function Todo({ title , done }) {
    return <div>
        {title} - {done ? "Done" : "Not Done" }
    </div>
}

export default App;