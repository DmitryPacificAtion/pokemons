import {combineReducers} from 'redux';

import {POKEMON_WAS_SELECTED,
    CONTENT_IS_LOADING,
    REQUEST_CONTENT} from '../Actions/actions';

const initialState = {
    wasSelected: false,
    isLoading: false,
    payload: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_WAS_SELECTED:
            return {wasSelected: action.wasSelected};
        case CONTENT_IS_LOADING:
            return state;
        case REQUEST_CONTENT:
                return state;
        default:
            return state;
    }
};
export default reducer;
