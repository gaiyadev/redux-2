import * as actionTypes from '../../redux/actions/types';

const URL = 'https://jsonplaceholder.typicode.com/posts';

// Sending all action to post reducer
// fetchPost will be imported in the AllPost Component

export const fetchPost = () => dispatch => {
    // console.log('fetching');
    fetch(URL)
        .then(reponse => reponse.json())
        .then(posts => dispatch({
            type: actionTypes.FETCH_POSTS,
            payload: posts
        }));
};

// Adding new post

export const createPost = postData => dispatch => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(post => dispatch({
            type: actionTypes.NEW_POST,
            payload: post
        }))
        .catch(err => console.log(err));
};

