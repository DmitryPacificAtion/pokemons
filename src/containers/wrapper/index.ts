import { connect } from "react-redux";
import { fetchAction, selectAction } from "../../actions";

const mapStateToProps = (state) => {
  return {
    selectedItems: state.selectedItems,
    isLoading: state.isLoading,
    pokemons: state.payload
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: (id) => {
      dispatch(selectAction(id))
    },
    getData: (endpoint) => {
      dispatch(fetchAction(endpoint));
    }
  }
};