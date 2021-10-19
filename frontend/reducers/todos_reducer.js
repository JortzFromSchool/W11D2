import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
    3: {
      id: 3,
      title: "wash car",
      body: "with soap",
      done: false
    },
    4: {
      id: 4,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case RECEIVE_TODOS:
            let todos = {};
            action.todos.forEach((todo) => {
                todos[todo.id] = todo;
            });
            return todos;
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;

    }
};

export default todosReducer;