import auth from './Middlewares/Authenticate';

export const POKEMON_WAS_SELECTED = 'POKEMON_WAS_SELECTED';
export const CONTENT_IS_LOADING = 'IS_LOADING';
export const GET_POKEMON_LIST = 'GET_POKEMON_LIST';
export const GET_POKEMON_ITEM = 'GET_POKEMON_ITEM';

let selected = false;
export const pokemonWasSelectedAction = () => {
    selected = !selected;
    return {type: POKEMON_WAS_SELECTED, wasSelected: selected};
};
export const onLoadingAction = (flag) => {
    return {type: CONTENT_IS_LOADING, contentIsLoading: flag};
};
export const getListAction = (json) => {
    return {
        type: GET_POKEMON_LIST,
        list: json
    }
};
export const getItemAction = (json) => {
    return {
        type: GET_POKEMON_ITEM,
        item: json
    }
};

let isInitialized = false;
export const fetchList = (endpoint) => {
    return (dispatch) => {
        if (isInitialized) {
            dispatch(onLoadingAction(false));
            return auth.unserialize('pokemonData');
        }
        dispatch(onLoadingAction(true));
        return auth.sendRequest(endpoint)
            .then(json => {
                dispatch(getListAction(json));
                dispatch(onLoadingAction(false));
                return json;
            })
    }
};
export const fetchItem = (endpoint) => {
    return (dispatch) => {
        dispatch(onLoadingAction(true));
        return auth.sendRequest(endpoint)
            .then(json => {
                dispatch(getItemAction(json));
                dispatch(onLoadingAction(false));
                return json;
            })
    }
};