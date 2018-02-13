import {combineReducers} from 'redux';
import auth from '../Actions/Middlewares/Authenticate';
import {POKEMON_WAS_SELECTED, CONTENT_IS_LOADING, GET_POKEMON_LIST, GET_POKEMON_ITEM, fetchList} from '../Actions/actions';

let payloadDataName = 'pokemonData';

const initialState = {
    wasSelected: false,
    contentIsLoading: true,
    pokemons: {
        list: auth.unserialize(payloadDataName) || {},
        items: []
    }
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
        case GET_POKEMON_LIST:
            newState.pokemons.list = Object.assign({}, action.list);
            auth.serialize(payloadDataName, newState.pokemons);
            return newState;
        case GET_POKEMON_ITEM:
            newState.pokemons.items.push(action.item);
            auth.serialize(payloadDataName, newState.pokemons);
            return newState;
        default:
            return state;
    }
};
export default reducer;
