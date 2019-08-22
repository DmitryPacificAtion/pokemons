import React from 'react';
import repository from '../../repository';

class Header extends React.Component {
  async componentDidMount() {
    const data = await repository.getMenuLinks();
    console.log("data", data);
  }

  render() {
    return (<header><h1>Pokedex</h1></header>);
  }
}

export default Header;