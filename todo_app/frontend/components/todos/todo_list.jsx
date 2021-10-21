import React from "react";
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchTodos();
    }

    render() {
        const {todos, removeTodo, receiveTodo, createTodo, receiveErrors} = this.props;
        
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
                <TodoListForm receiveErrors={receiveErrors} createTodo={createTodo} />    
            </div>)
    }
};