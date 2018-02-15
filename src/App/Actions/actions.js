import auth from './Middlewares/Authenticate';

export const POKEMON_WAS_SELECTED = 'POKEMON_WAS_SELECTED';
export const SEND_REQUEST = 'SEND_REQUEST';
export const GET_RESPONSE = 'GET_RESPONSE';

export const selectAction = (id) => {
    return {type: POKEMON_WAS_SELECTED, id: id};
};
export const requestAction = () => {
    return {type: SEND_REQUEST, isLoading: true};
};
export const responseAction = (json) => {
    return {
        type: GET_RESPONSE,
        isLoading: false,
        payload: json
    }
};
export const fetchAction = (endpoint) => {
    return (dispatch) => {
        dispatch(requestAction());
        return auth.sendRequest(endpoint)
            .then(json => {
                dispatch(responseAction(json));
                return json;
            })
    }
};