import * as actionTypes from '../../redux/actions/types';

const initialState = {
    items: [], // represent all post fetch
    item: {} // represent a single post added
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS:
            // console.log('its's worked');
            return {
                ...state,
                items: action.payload
            };
        case actionTypes.NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }

}