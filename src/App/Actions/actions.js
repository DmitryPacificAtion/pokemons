import auth from './Middlewares/Authenticate';

export const POKEMON_WAS_SELECTED = 'POKEMON_WAS_SELECTED';
export const CONTENT_IS_LOADING = 'IS_LOADING';
export const REQUEST_CONTENT = 'REQUEST';

let selected = false;
export const pokemonWasSelectedAction = () => {
    selected = !selected;
    return {type: POKEMON_WAS_SELECTED, wasSelected: selected};
};
export const onLoadingAction = (flag) => {
    return {type: CONTENT_IS_LOADING, contentIsLoading: flag};
};

export const getDataAction = (json) => {
    return {
        type: REQUEST_CONTENT,
        payload: json
    }
};

export const fetchData = (endpoint = '') => {
    let payloadDataName = 'pokemonData';
    return (dispatch) => {
        dispatch(onLoadingAction(true));
        return auth.sendRequest(endpoint)
            .then(json => {
                dispatch(getDataAction(json));
                auth.serialize(payloadDataName, json);
                dispatch(onLoadingAction(false));
                return json;
            })
    }
};