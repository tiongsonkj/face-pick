import React from "react";
import "./wrapper.css";

// so we set up props.children to prepare for an arbitrarily amount of children inside of this wrapper
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;