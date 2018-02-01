import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {HashRouter} from 'react-router-dom';
import Header from './Header/Header.jsx';
import PokemonContainer from './PokemonContainer/PokemonContainer.jsx';
import PokemonInfo from './PokemonInfo/PokemonInfo.jsx';
import './ColorVariables.scss';
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="l-wrapper">
                <Header />
                <section>
                    <PokemonContainer />
                    <PokemonInfo />
                </section>
            </div>
        );
    }
}

export default App;
