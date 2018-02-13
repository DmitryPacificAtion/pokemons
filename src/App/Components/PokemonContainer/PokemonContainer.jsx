import React, {Component} from 'react';
import {pokemonWasSelectedAction, fetchList, fetchItem} from "../../Actions/actions";
import PokemonInfo from '../../Components/PokemonInfo/PokemonInfo.jsx';
import {connect} from "react-redux";
import Spinner from "../Spinner/Spinner.jsx";
import redLike from './like-red.svg';
import blackLike from './like-black.svg';
import './PokemonContainer.scss';
import defaultPng from './default.png';

class PokemonContainer extends Component {
    componentWillMount() {
        if (!this.props.isInitialized)
            this.props.getList();
    }
    render() {
        let loading = '';
        if (this.props.contentIsLoading) {
            loading = <Spinner/>;
        }
        else loading = <button className="preloader" type="button" onClick={() => this.props.getList(this.props.pokemons.list.next)}>Load More</button>;
        return (
            <figcaption>
                <div className="figure-wrapper">
                    {
                        this.props.contentIsLoading
                            ? <Spinner/>
                            : this.props.pokemons.list.results.map(i => {
                                let a = i.url.match('[^\\w]\\d+');
                                console.log('item ', i, a[0]);
                                return <PokemonCard key={i.url}
                                                    selectItem={this.props.selectItem}
                                                    wasSelected={this.props.wasSelected}
                                                    url={i.url}
                                                    title={i.name}
                                                    onClickHandler={this.props.getItem}/>
                            })
                    }
                </div>
                <button className="preloader" type="button" onClick={() => this.props.getList(this.props.pokemons.list.next)}>Load More</button>
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
        let {title, url, onClickHandler} = this.props;
        return (
            <figure className="pokemon-card">
                <div className="preview">
                    <img
                        src={defaultPng}
                        alt="Pokemon 0" width="120" height="120"/>
                </div>
                <h2 className="title">
                    <a href='#' onClick={(e) => {
                        e.preventDefault();
                        onClickHandler(url)
                    }}>{title}</a>
                </h2>
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
        contentIsLoading: state.contentIsLoading,
        pokemons: state.pokemons,
        isInitialized: state.isInitialized
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (e) => {
            e.preventDefault();
            dispatch(pokemonWasSelectedAction())
        },
        getList: () => {
            dispatch(fetchList());
        },
        getItem: (endpoint) => {
            dispatch(fetchItem(endpoint));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);