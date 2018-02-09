import React, {Component} from 'react';
import './PokemonContainer.scss';
import redLike from './like-red.svg';
import blackLike from './like-black.svg';
import {pokemonWasSelectedAction, getContentAction} from "../../Actions/actions";
import PokemonInfo from '../../Components/PokemonInfo/PokemonInfo.jsx';
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner.jsx";
import defaultPng from './default.png';

/*const LoadMore = (loading) => {
    console.log(loading)
     /!*if (loading === true) {
         return <Spinner/>
     }*!/
     return <button className="preloader" type="button" onClick={this.props.getContent}>Load More</button>;
};*/

class PokemonContainer extends Component {
    render() {
        let loading = <button className="preloader" type="button" onClick={this.props.getContent}>Load More</button>
        return (
            <figcaption>
                <div className="figure-wrapper">
                    <PokemonCard selectItem={this.props.selectItem} wasSelected={this.props.wasSelected}/>
                </div>
                {loading}
            </figcaption>
        );
    }
}

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }

    render() {
        let heart = (this.props.wasSelected || this.state.hovered) ? redLike : blackLike;
        return (
            <figure className="pokemon-card">
                <div className="preview">
                    <img
                        src={defaultPng}
                        alt="Pokemon 0" width="120" height="120"/>
                </div>
                <h2 className="title">Pokemon title</h2>
                <button className="type green-btn">Grass</button>
                <div className="like">
                    <a href="#">
                        <img src={heart}
                             onClick={this.props.selectItem}
                             onMouseOver={() => this.setState({hovered: true})}
                             onMouseOut={() => this.setState({hovered: false})}
                             width="32" height="auto"
                             alt="Like"/>
                    </a>
                </div>
            </figure>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wasSelected: state.wasSelected,
        contentIsLoading: state.contentIsLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: () => {
            dispatch(pokemonWasSelectedAction())
        },
        getContent: () => {
            dispatch(getContentAction());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);