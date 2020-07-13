import { combineReducers } from 'redux';
import postReducer from '../../redux/reducers/postReducer';

//rootReducer

export default combineReducers({
    posts: postReducer //..posts will be use in the AllPOst component
});