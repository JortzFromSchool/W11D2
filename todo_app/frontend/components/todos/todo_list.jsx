import React from "react";
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

export default (props) => {
    const {todos, removeTodo, receiveTodo} = props;
    return(
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo) => (
                <TodoListItem 
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    receiveTodo={receiveTodo}
                    />))}
            </ul>
            <TodoListForm receiveTodo={receiveTodo} />    
        </div>)
    };