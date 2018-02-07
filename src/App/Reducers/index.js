import { combineReducers } from 'redux';

import {FAVORITE_POKEMON} from '../Actions/actions';

const initialState = {
    isFavorite: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITE_POKEMON:
            console.log(state.isFavorite);
            return [...state, {isFavorite: !action.isFavorite}];
        default:
            return state;
    }
};
export default reducer;
