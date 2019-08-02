import { IState } from "../../interfaces/card-wrapper";

export const mapStateToProps = ( state: IState ) => ({
  loading: state.loading,
});
