import { RECEIVE_ERRORS, CLEAR_ERRORS } from "../actions/error_actions";

const initialState = {};

export const errorReducer = (state = initialState, action) => {

    switch(action.type) {

        case RECEIVE_ERRORS:
            return action.errors;

        case CLEAR_ERRORS:
            return [];

    }

}