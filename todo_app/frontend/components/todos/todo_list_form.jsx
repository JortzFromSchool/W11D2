import React from "react";
import { uniqueId } from '../../util/utils';

export default class TodoListForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        };

        this.bindFuncs();
    }

    bindFuncs() {
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    updateDoneStatus(e) {
        let status;
        e.target.value === "true" ? status = true : status = false;
        this.setState({ done: status });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false,
        });
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title: 
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                </label>
                <label>Body: 
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}
                    />
                </label>
                <select onChange={this.updateDoneStatus} defaultValue="false">
                    <option value="true">True</option>
                    <option value="false" >False</option>
                </select>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }



}