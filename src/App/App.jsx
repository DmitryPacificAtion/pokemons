import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from './Components/Container';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="l-wrapper">
        <Header />
        <section>
          <Container />
        </section>
      </div>
    );
  }
}

export default connect(null, null)(App);
