import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    removeTodo: todo => dispatch(removeTodo(todo))
});

const container = connect(null, mapDispatchToProps);
export default container(TodoDetailView);