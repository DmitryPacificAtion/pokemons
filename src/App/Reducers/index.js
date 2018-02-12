import {combineReducers} from 'redux';
import auth from '../Actions/Middlewares/Authenticate';
import {POKEMON_WAS_SELECTED, CONTENT_IS_LOADING, REQUEST_CONTENT, fetchData} from '../Actions/actions';

const initialState = {
    wasSelected: false,
    contentIsLoading: false,
    payload: auth.unserialize('pokemonData') || fetchData()
};

const reducer = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
        case POKEMON_WAS_SELECTED:
            newState.wasSelected = action.wasSelected;
            return newState;
        case CONTENT_IS_LOADING:
            newState.contentIsLoading = action.contentIsLoading;
            return newState;
        case REQUEST_CONTENT:
            newState.payload = action.payload;
            return newState;
        default:
            return state;
    }
};
export default reducer;
