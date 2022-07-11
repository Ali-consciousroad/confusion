import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { 
        // change the state
        errMess: null, 
        feedbacks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading: false, errMess: null, feedbacks: action.payload};
            
        case ActionTypes.FEEDBACKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, feedbacks: []};
            
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            // ...state takes whatever is in the state (needed because the state has changed)
            // Concat() function doesn't modify the state but create a new state object
            return { ...state, feedbacks: state.feedbacks.concat(feedback)};
        default:
            return state;
    }
};