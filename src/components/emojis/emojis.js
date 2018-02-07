import React from "react";
import "./emojis.css";

const Emojis = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
            <span onClick={() => props.removeEmoji(props.id)} className="remove">x</span>
        </div>
    </div>
);

export default Emojis;