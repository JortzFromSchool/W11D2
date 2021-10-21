import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
    1: {
        id: 1,
        todo_id: 3,
        title: "turn on hose",
        done: false,
    },
    2: {
        id: 2,
        todo_id: 3,
        title: "fill bucket",
        done: false,
    }
};

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case RECEIVE_STEPS:
            let steps = {};
            action.steps.forEach((step) => {
                steps[step.id] = step;
            });
            return steps;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
};

export default stepsReducer;

