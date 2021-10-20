import React from "react";

export default (props) => (
    <ul>
        <li>{props.body}</li>
        <li>{props.done.toString()}</li>
    </ul>
);