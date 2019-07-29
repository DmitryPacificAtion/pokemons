export const mapStateToProps = state => ({
  selectedItems: state.selectedItems,
  isLoading: state.isLoading,
  pokemons: state.payload
});
