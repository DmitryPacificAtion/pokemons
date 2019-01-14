import React from 'react';
import defalut from './spinner.gif';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: ''
    }
  }
  startTiming() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  };
  tick() {
    let dot = this.state.dots;
    if (dot.length === 3) {
      clearInterval(this.timerId);
      this.setState({
        dots: ''
      });
      this.startTiming();
    }
    else {
      this.setState({
        dots: dot + '.'
      });
    }
  }


  render() {
    let loading = 'Loading' + this.state.dots;
    return <div className="spinner">
      <p>
        <img src={defalut} width="64px" height="auto" alt="Loading" />
      </p>
      <p className="loading">{loading}</p>
    </div>
  }
}

export default Spinner;