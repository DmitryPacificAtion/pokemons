import React, {Component} from 'react';
import './PokemonContainer.scss';
import '../Utilities/common.js';
import redLike from './like-red.svg';
class PokemonContainer extends Component {
    render() {
        return (
            <figcaption>
                <div className="figure-wrapper">
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                    <PokemonItem/>
                </div>
                <button className="preloader">Load More</button>
            </figcaption>
        );
    }
}

class PokemonItem extends Component {
    render() {
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
                        <img src={redLike} width="32" height="auto"
                             alt="Like"/>
                    </a>
                </div>
            </figure>
        );
    }
}

export default PokemonContainer;