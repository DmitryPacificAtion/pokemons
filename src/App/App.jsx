import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header.jsx';
import Spinner from "./Components/Spinner/Spinner.jsx";
import PokemonContainer from './Components/PokemonContainer/PokemonContainer.jsx'
import './ColorVariables.scss';
import './App.scss';
import {connect} from "react-redux";

class App extends Component {
    render() {
        let component = <Spinner/>;
        if(!false) {
            component = <PokemonContainer />;
        }
        return (
            <div className="l-wrapper">
                <Header />
                <section>
                    {component}
                </section>
            </div>
        );
    }
}

export default connect(null, null)(App);
