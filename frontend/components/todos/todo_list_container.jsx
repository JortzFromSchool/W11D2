import { connect } from "react-redux";
import { allTodos } from "../../reducers/selectors";
import todoList from "./todo_list";

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
};

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

const container = connect(mapStateToProps, mapDispatchToProps);
export default container(todoList);