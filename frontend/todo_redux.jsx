import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './store/store';
import{receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';

import Root from './components/root';
import {allTodos} from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const store = configureStore();
    window.store = store;
    ReactDOM.render(< Root store={store}/>, content);

    
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
});
