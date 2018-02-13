import {combineReducers} from 'redux';
import auth from '../Actions/Middlewares/Authenticate';
import {
    POKEMON_WAS_SELECTED, CONTENT_IS_LOADING, GET_POKEMON_LIST, GET_POKEMON_ITEM, INITIALIZE
} from '../Actions/actions';

const initialState = {
    wasSelected: false,
    contentIsLoading: true,
    pokemons: {
        list: [],
        items: []
    },
    isInitialized: false
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
            if (newState.pokemons.list.results !== undefined)
                newState.pokemons.list.results.push
            else
                newState.pokemons.list = Object.assign({}, action.list);
            auth.serialize('pokemonData', newState.pokemons);
            return newState;
        case GET_POKEMON_ITEM:
            newState.pokemons.items.push(action.item);
            auth.serialize('pokemonData', newState.pokemons);
            return newState;
        case INITIALIZE:
            newState.isInitialized = action.isInitialized;
            return newState;
        default:
            return state;
    }
};
export default reducer;
