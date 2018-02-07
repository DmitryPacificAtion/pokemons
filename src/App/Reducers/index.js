import { combineReducers } from 'redux';

import {IS_FAVORITE_POKEMON} from '../Actions/actions';

const initialState = {
    isSelected: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FAVORITE_POKEMON:
            console.log(state.isSelected);
            return [...state, {isSelected: !action.isSelected}];
        default:
            return state;
    }
};
export default reducer;
