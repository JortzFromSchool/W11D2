import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import{receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';


const ToDosApp = (props) => { return (<h1>Todos App</h1>) }


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(< ToDosApp />, content);
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
});
