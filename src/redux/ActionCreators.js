// REDUX ACTIONS 
/* Send data from the application to the redux store */ 
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: comment     
});

// Post the comments to the server 
// Double arrow function and dispatch needed because we are using a Redux Thunk
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    // Post the comments to the server
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
        // Error handling 
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); });
}

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK, 
    payload: feedback     
});

// Post the feedbacks to the server 
export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    newFeedback.date = new Date().toISOString();
    // Post the feedbacks to the server
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
        // Error handling 
    .then(response => dispatch(addFeedback(response)))
    .catch(error => { console.log('post feedbacks', error.message); 
        alert('Your feedback could not be posted\nError: '+error.message); });
}

// Fetch the dishes from the DB 
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    // Fetch the dishes from the json-server
    return fetch(baseUrl + "dishes")
    // Handle the errors
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
        // Error handling 
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

// Fetch the comments from the DB 
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const feedbacksFailed = (errmess) => ({
    type: ActionTypes.FEEDBACKS_FAILED,
    payload: errmess
});

export const addFeedbacks = (feedbacks) => ({
    type: ActionTypes.ADD_FEEDBACKS,
    payload: feedbacks
});

// Fetch the promos from the DB 
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    // Fetch the promotions from the json-server
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// Fetch the authors from the DB 
export const fetchLeaders = () => (dispatch) => {
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok){
            return response;
        }   else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    // Error handler / Promise
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
};

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});