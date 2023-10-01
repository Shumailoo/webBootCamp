import React from "react";
import Avatar from './Avatar';

function Card(props){
    return(
        <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar url={props.url}/>
            </div>
            <div className="bottom">
            <p className="info">{props.pt1}</p>
            <p className="info">{props.pt2}</p>
        </div>
    </div>

    );
}

export default Card;