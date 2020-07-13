import { combineReducers } from 'redux';
import postReducer from '../../redux/reducers/postReducer';

//rootReducer
// Where to include all applcation reducers

export default combineReducers({
    posts: postReducer //..posts will be use in the AllPost component
});