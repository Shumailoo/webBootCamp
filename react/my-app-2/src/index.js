import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// function Card(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <img
//         src={props.url}
//         alt="avatar_img"
//       />
//     <p>{props.pt1}</p>
//     <p>{props.pt2}</p>

//     </div>
//   );
// }


// ReactDOM.render(
//   <div>
//     <h1>Characters</h1>
//     <Card name="Monkey D Luffy" url="https://pbs.twimg.com/profile_images/1205884469808390150/2ixfe-m0_400x400.jpg" pt1="Pirate King" pt2="Fifth Empror"/>
//     <Card name="Itachi Uchiha" url="https://pbs.twimg.com/profile_images/1267289480379215872/7kHprhR3_400x400.jpg" pt1="peace for whole clan" pt2="sharingan"/>
//     <Card name="Goku" url="https://pbs.twimg.com/profile_images/1161029588144861185/-PyvRzlW_400x400.jpg" pt1="Ultra Instinct" pt2="Fighting for strength"/>
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />,document.getElementById("root"));