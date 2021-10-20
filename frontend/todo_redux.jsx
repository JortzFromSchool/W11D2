import React from 'react';
import ReactDOM from 'react-dom';

import {configureStore} from './store/store';
import{receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';

import { App } from './components/app';


document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    ReactDOM.render(< App />, content);
    const store = configureStore();

    
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
});
