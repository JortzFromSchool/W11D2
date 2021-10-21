import {connect} from "react-redux";
import TodoDetailView from '../todo_list/todo_detail_view';

const mapDispatchToProps = (dispatch) => ({
    removeTodo: todo => dispatch(removeTodo(todo))
});

const container = connect(null, mapDispatchToProps);
export default container(TodoDetailView);