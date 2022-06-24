import * as ActionTypes from './ActionTypes';

export const Comments = (state = { 
        // change the state
        errMess: null, 
        comments:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};
            
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};
            
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            // ...state takes whatever is in the state (needed because the state has changed)
            // Concat() function doesn't modify the state but create a new state object
            return { ...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};