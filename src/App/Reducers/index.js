import {combineReducers} from 'redux';

import {POKEMON_WAS_SELECTED, CONTENT_IS_LOADING, REQUEST_CONTENT} from '../Actions/actions';

const initialState = {
    wasSelected: false,
    contentIsLoading: false,
    payload: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_WAS_SELECTED:
            return {wasSelected: action.wasSelected};
        case CONTENT_IS_LOADING:
            return {contentIsLoading: action.contentIsLoading};
        case REQUEST_CONTENT:
                return {payload: action.payload};
        default:
            return state;
    }
};
export default reducer;
