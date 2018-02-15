import {combineReducers} from 'redux';
import {POKEMON_WAS_SELECTED, SEND_REQUEST, GET_RESPONSE} from '../Actions/actions';

const initialState = {
    selectedItems: [],
    isLoading: true,
    payload: {
        //pagination: []
    }
};

const reducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case POKEMON_WAS_SELECTED:
            newState.selectedItems.push(action.id);
            return newState;
        case GET_RESPONSE:
            //newState.payload.pagination.push(action.payload.results);
            if (newState.payload.results === undefined)
                newState.payload = Object.assign({}, action.payload);
            else {
                newState.payload.next = action.payload.next;
                newState.payload.previous = action.payload.previous;
                newState.payload.results = [...newState.payload.results, ...action.payload.results];
            }
        case SEND_REQUEST:
            newState.isLoading = action.isLoading;
            return newState;
        default:
            return state;
    }
};
export default reducer;
