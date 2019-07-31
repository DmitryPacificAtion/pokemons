// import auth from './middlewares/authenticate';
import actionTypes from "./action-types";

export const selectAction = (id: number) => {
  return {
    type: actionTypes.POKEMON_WAS_SELECTED,
    id: id
  };
};
export const requestAction = () => {
  return {
    type: actionTypes.SEND_REQUEST,
    isLoading: true
  };
};
export const responseAction = (json: JSON) => {
  return {
    type: actionTypes.GET_RESPONSE,
    isLoading: false,
    payload: json
  }
};

export const fetchAction = (endpoint: string) => {
  return (dispatch) => {
    dispatch(requestAction());
    return JSON.stringify({});
   /*  return auth.sendRequest(endpoint)
      .then(json => {
        dispatch(responseAction(json));
        return json;
      }) */
  }
};