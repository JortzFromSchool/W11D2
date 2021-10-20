import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    removeTodo: todo => dispatch(removeTodo(todo))
});