import React from 'react';
import repository from '../../repository';

class Header extends React.Component {
  public async componentDidMount() {
    const data = await repository.getMenuLinks();
    console.log("data", data);
  }

  public render() {
    return (<header><h1>Pokedex</h1></header>);
  }
}

export default Header;