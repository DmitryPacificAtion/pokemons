import React, {Component} from 'react';
import Header from './Header';
import PokemonContainer from './PokemonContainer';
import PokemonInfo from "./PokemonInfo";

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
