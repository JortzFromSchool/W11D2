import React from 'react';
import ReactDOM from 'react-dom';


const ToDosApp = (props) => { return (<h1>Todos App</h1>) }


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(< ToDosApp />, content);
});
