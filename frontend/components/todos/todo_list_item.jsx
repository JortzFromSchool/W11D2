import React from 'react';
import { render } from 'react-dom';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            body: props.body,
            done: props.done
        }
        // this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        //this.toggleDone = this.toggleDone.bind(this);
    }

    // handleRemove(e){
    //     this.props.removeTodo(this.state);
    // }

    handleDone(e) {
        this.toggleDone();
        this.props.receiveTodo(this.props.todo);
    }

    toggleDone(){
        const status = this.props.todo.done ? false :  true;
        this.props.todo.done = status;
    }


    // removed: <p>Done: {this.props.todo.done.toString()}</p>
    // removed: <button onClick={this.handleRemove}>Remove Todo</button>
    render() {
        return (
            <li key={this.props.todo.id}>
                <p>{this.props.todo.title}</p>
                <button onClick={this.handleDone}>{this.props.todo.done ? "Done" : "Undo"}</button>
            </li>
        )
    }

};