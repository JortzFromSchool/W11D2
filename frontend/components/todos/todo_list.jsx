import React from "react";

export default (props) => (
    <div>
        <h3>Todo List</h3>
        <ul>
            {props.todos.map((todo) => <li key={todo.id}><TodoListItem props={todo} /></li>)}
        </ul>    
    </div>);