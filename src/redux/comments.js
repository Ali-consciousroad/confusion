import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comment: ', comment);
            // We can do this because the concat() function doesn't modify the state but create a new state object
            return state.concat(comment);
        default:
            return state;
    }
};