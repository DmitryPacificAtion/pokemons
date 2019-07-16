import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAction, selectAction } from "../../Actions/actions";
import Card from '../Card';
// import Pagination from '../Pagination';
import Spinner from "../Spinner";

class Container extends Component {
  componentWillMount() {
    this.props.getData();
  }

  render() {
    let { pokemons } = this.props;
    let content = '';
    if (pokemons.results !== undefined) {
      content = pokemons.results.map(i => {
        let id = i.url.match('[^\\w]\\d+')[0].match('\\d+')[0];
        return <Card key={i.url}
          onSelectHandler={this.props.selectItem}
          selectedItems={this.props.selectedItems}
          url={i.url}
          id={id}
          title={`${i.name} ${id}`}
          onClickHandler={this.props.getData} />
      })
    }
    let spinner = '';
    if (this.props.isLoading) {
      spinner = <Spinner />
    }
    return (
      <figcaption>
        <div className="figure-wrapper">
          {content}
          {spinner}
        </div>
        {/* <Pagination /> */}
        <button className="preloader" type="button"
          onClick={() => this.props.getData(this.props.pokemons.next)}>Load More
                </button>
      </figcaption>
    );
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(Container);