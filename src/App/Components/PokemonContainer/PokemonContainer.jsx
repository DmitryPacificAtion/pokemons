import React, {Component} from 'react';
import './PokemonContainer.scss';
import redLike from './like-red.svg';
import blackLike from './like-black.svg';
import PokemonInfo from '../../Components/PokemonInfo/PokemonInfo.jsx';


class PokemonContainer extends Component {
    onLoadMore = dispatch => {
        dispatch()
    };

    render() {
        return (
            <figcaption>
                <div className="figure-wrapper">
                    <PokemonItem/>
                </div>
                <button className="preloader" type="button" onClick={this.onLoadMore}>Load More</button>
            </figcaption>
        );
    }
}

class PokemonItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavorite: false,
            selected: false
        }
    }

    hoverHeart = (flag) => {
        if (!this.state.selected)
            this.setState({isFavorite: flag});
    };
    selectItem = (e) => {
        e.preventDefault();
        this.setState({selected: !this.state.selected});
    };
    render() {
        let heart = blackLike;
        if (this.state.isFavorite) {
            heart = redLike;
        }
        return (
            <figure>
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
                             onMouseOver={() => this.hoverHeart(true)} onMouseOut={() => this.hoverHeart(false)}
                             onClick={this.selectItem}
                             width="32" height="auto"
                             alt="Like"/>
                    </a>
                </div>
            </figure>
        );
    }
}

export default PokemonContainer;