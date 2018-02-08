import {combineReducers} from 'redux';

import {IS_SELECTED, IS_LOADING, GET_CONTENT} from '../Actions/actions';

const initialState = {
    isSelected: false,
    isLoading: true,
    payload: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SELECTED:
            console.log('reducer IS_SELECTED', state, action);
            return state;
        case IS_LOADING:
            console.log('reducer IS_LOADING', state, action);
            return {isLoading: action.isLoading};
        case GET_CONTENT:
            console.log('reducer GET_CONTENT', state, action);
            return state;
        default:
            return state;
    }
};
export default reducer;
