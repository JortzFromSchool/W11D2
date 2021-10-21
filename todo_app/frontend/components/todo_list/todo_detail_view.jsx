import React from "react";

export default (props) => {

    console.log(props);
    
    return (
    <ul>
        <li>{props.body}</li>
        <li>{props.done.toString()}</li>
    </ul>
)};