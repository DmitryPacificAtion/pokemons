import React from 'react';
import Header from "./header";
// import Spinner from "./spinner";
// import PokemonContainer from './Components/PokemonContainer/PokemonContainer'
// import CardWrapper from "../containers/wrapper";
// import './ColorVariables.scss';
import './App.scss';
// import {connect} from "react-redux";

class App extends React.PureComponent {
  public render() {
    return (
      <div className="l-wrapper">
        <Header />
        <section>
         <div>CardWrapper</div>
        </section>
      </div>
    );
  }
}

export default App;
