import React from 'react';
import Header from "./header";
import CardWrapper from "../components/card-wrapper/index";
// import Spinner from "./spinner";
// import './ColorVariables.scss';
// import {connect} from "react-redux";

class App extends React.PureComponent {
  public render() {
    return (
      <div className="l-wrapper">
        <Header />
        <section>
          <CardWrapper />
        </section>
      </div>
    );
  }
}

export default App;
