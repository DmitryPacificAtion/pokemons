import { fetchAction, selectAction } from "../../actions";

export const mapDispatchToProps = dispatch => ({
  selectItem: id => dispatch(selectAction(id)),
  getData: endpoint => dispatch(fetchAction(endpoint)),
});
