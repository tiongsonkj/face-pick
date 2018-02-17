import React from "react";

const Navbar = props => (
    <div className="navbar">
        <a className="navbar-brand">Face Pick!</a>
        <a>Click an image to begin!</a>
        <span className="navbar-text">Score: {props.currentScore} | Top Score: {props.topScore}</span>
    </div>
);

export default Navbar;