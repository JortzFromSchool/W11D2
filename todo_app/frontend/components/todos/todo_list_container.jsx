import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import todoList from "./todo_list";
import { receiveTodo, removeTodo, fetchTodos, createTodo } from "../../actions/todo_actions";
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(createTodo(todo)),
    receiveErrors: (err) => dispatch(receiveErrors(err))
}};

const container = connect(mapStateToProps, mapDispatchToProps);
export default container(todoList);