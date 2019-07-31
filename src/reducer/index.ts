import actionTypes from '../actions/action-types';

// const initialState = {
//   selectedItems: [],
//   isLoading: true,
//   payload: {
//     //pagination: []
//   }
// };

const reducer = (state = {}, {}) => {
  return state;
  // switch (action.type) {
  //   case actionTypes.POKEMON_WAS_SELECTED:
  //     state.selectedItems.push(action.id);
  //     return state;
  //   case actionTypes.GET_RESPONSE:
  //     //state.payload.pagination.push(action.payload.results);
  //     if (state.payload.results === undefined)
  //       state.payload = Object.assign({}, action.payload);
  //     else {
  //       state.payload.next = action.payload.next;
  //       state.payload.previous = action.payload.previous;
  //       state.payload.results = [...state.payload.results, ...action.payload.results];
  //     }
  //   case actionTypes.SEND_REQUEST:
  //     state.isLoading = action.isLoading;
  //     return state;
  //   default:
  //     return state;
  // }
};
export default reducer;