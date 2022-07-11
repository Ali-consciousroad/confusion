import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Feedbacks } from './feedbacks';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
        dishes: Dishes,
        comments: Comments,
        feedbacks: Feedbacks,
        promotions: Promotions,
        leaders: Leaders, 
        ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(thunk, logger)
    );

    return store;
}