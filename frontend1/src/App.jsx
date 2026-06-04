import { useState } from "react";
import { PostComponent} from "./Post";

function App() {
  const [posts , setPosts] = useState([]);
    // const posts = [{
    //   name: "Paras",
    //   subtitle: "1000 followers",
    //   time: "2m ago",
    //   image: "https://cdn.dida.do/bird-(9)-1733138076.png",
    //   description: "Want to know how to win big? Check out how these folks won $6000 in bounties."
    // }]

  const postComponents = posts.map(post => <PostComponent 
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts(posts => [...posts , {
      name: "Paras",
      subtitle: "1000 followers",
      time: "2m ago",
      image: "https://cdn.dida.do/bird-(9)-1733138076.png",
      description: "Want to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex" , justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

// const ToggleButton = () => {
//   // the compnent is not re-rendering
//   // because we haven't used the dynamic variable inside a state

//   let visible = true;
//   function func() {
//     visible = !visible;
//   }
//   return (
//     <div>
//       <button onClick={func}>Toggle Message</button>
//       {visible && <p>This message is hidden</p>}
//     </div>
//   )
// }



// const ToggleButton = () => {
//   const [notifCount , setNotifCount] = useState(0);
//   // when the value of the state variable changes
//   // the compinent using that state variable gets re-rendered.

//   function func() {
//     console.log("re-render");
//     setNotifCount(notifCount => notifCount + 1);
//   }

//    return (
//     <div>
//       <button onClick = {func}>Increase Count</button>
//       {notifCount}
//     </div>
//   )
// }

// const style = { width: 200 , backgroundColor: "white" , borderRadius: 10 , borderColor: "gray" , borderWidth: 1 , display: "flex" }
// function PostComponent(props) {
//   return <div>
//     <div style={style}>
//       <img src= {"https://cdn.dida.do/bird-(9)-1733138076.png"} style={{
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//       }} />
//       <div style={{ fontSize: 12 , marginLeft: 16 }}>
//         <b>{props.name}</b>
//         <div>{props.followers}</div>
//         <div>{props.time}</div>
//       </div>
//       <div>
//       Want to know how to win big? Check out how these folks won $6000 in bounties....
//       </div>
//     </div>
//   </div>
// }

export default App