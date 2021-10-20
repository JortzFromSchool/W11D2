import React from "react";
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

export default (props) => (
    <div>
        <h3>Todo List</h3>
        <ul>
            {props.todos.map((todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
        </ul>
        <TodoListForm receiveTodo={props.receiveTodo} />    
    </div>);