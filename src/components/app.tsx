import React from 'react';
import Header from './header';
import Card from './card';
// import CardWrapper from '../components/card-wrapper/index';
// import Spinner from "./spinner";
// import './ColorVariables.scss';

class App extends React.PureComponent {
  public render() {
    const mockedProps = {
      wasSelected: false,
      onClickHandler: () => console.log('Click item'),
      title: 'Hi Poks',
      url: './',
    };

    return (
      <div className="l-wrapper">
        <Header />
        <Card {...mockedProps} />
        <section>{/* <CardWrapper /> */}</section>
      </div>
    );
  }
}

export default App;
