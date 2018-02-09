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
export const getContentAction = () => {
    return {type: REQUEST_CONTENT }
    /*return (dispatch) => {
        dispatch(onLoadingAction(true));
        auth.sendRequest()
            .then(json => {
                console.log('json', json);
                dispatch(onLoadingAction(false));
                return {
                    type: REQUEST_CONTENT, payload: json
                };
            })
            .catch(error => {
                dispatch(onLoadingAction(false));
                throw new Error('Oops: ' + error)
            });
    }*/
};
