import React from 'react';
import { render } from 'react-dom';
import TodoDetailViewContainer from './todo_detail_view_container';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            body: props.body,
            done: props.done,
            detail: false,
        }
        // this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
        //this.toggleDone = this.toggleDone.bind(this);
        this.toggleDetail = this.toggleDetail.bind(this);
        // this.Details = this.Details.bind(this);
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

    toggleDetail(){
        this.setState( { detail: !this.state.detail } );
    }

    // removed: <p>Done: {this.props.todo.done.toString()}</p>
    // removed: <button onClick={this.handleRemove}>Remove Todo</button>
    render() {

        const { id, title, done} = this.props.todo;


        return (
            <li key={id}>
                <p onClick={this.toggleDetail}>{title}</p>
                < TodoDetailViewContainer />
                <button onClick={this.handleDone}>{done ? "Done" : "Undo"}</button>
            </li>
        )
    }

};