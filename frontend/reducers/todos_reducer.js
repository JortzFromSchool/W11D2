import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
        // case RECEIVE_TODO:
        //     nextState[action.todo.id] = action.todo;
        // case RECEIVE_TODOS:
        default:
            return state;

    }
};

export default todosReducer;