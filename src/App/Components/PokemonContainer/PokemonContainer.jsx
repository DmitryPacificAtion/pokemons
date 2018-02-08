import React, {Component} from 'react';
import './PokemonContainer.scss';
import redLike from './like-red.svg';
import blackLike from './like-black.svg';
import {onLoadingAction, selectAction, fetchingAction} from "../../Actions/actions";
import PokemonInfo from '../../Components/PokemonInfo/PokemonInfo.jsx';
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner.jsx";


class PokemonContainer extends Component {
    render() {
        let loading = this.props.isLoading
            ? <Spinner/>
            : <button className="preloader" type="button" onClick={this.props.fetchContent}>Load More</button>
        return (
            <figcaption>
                <div className="figure-wrapper">
                    <PokemonCard selectItem={this.props.selectItem} isSelected={this.props.isSelected}/>
                </div>
                <button className="preloader" type="button" onClick={this.props.fetchContent}>Load More</button>
            </figcaption>
        );
    }
}

class PokemonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    onCheck = (e) => {
        e.preventDefault();
        this.setState({selected: !this.state.selected});
        this.props.selectItem(this.state.selected);
        console.log('this.state.selected', this.state.selected)
    };

    render() {
        let heart = this.state.selected ? redLike : blackLike;
        return (
            <figure className="pokemon-card">
                <div className="preview">
                    <img
                        src="https://vignette.wikia.nocookie.net/pokemon/images/1/13/007Squirtle_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png/revision/latest?cb=20150105230449"
                        alt="Pokemon 0" width="120" height="120"/>
                </div>
                <h2 className="title">Pokemon title</h2>
                <button className="type green-btn">Grass</button>
                <div className="like">
                    <a href="#">
                        <img src={heart}
                             onClick={this.onCheck}
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
        isSelected: !state.isSelected,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (flag) => {
            dispatch(selectAction(flag))
        },
        showLoadingStatus: (flag) => {
            dispatch(onLoadingAction(flag))
        },
        fetchContent: () => {
            dispatch(fetchingAction());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);