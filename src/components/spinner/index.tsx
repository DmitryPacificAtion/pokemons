// import React from 'react';
// const spinner = "./spinner.gif";

// interface IState {
//   dots: string;
// }

// class Spinner extends React.Component<{}, IState> {
//   private _timerId: any;
//   public constructor(props: any) {
//     super(props);
//     this.state = {
//       dots: ''
//     }
//   }

//   public get timerId(): NodeJS.Timeout {
//     return this._timerId;
//   }

//   public set timerId(id: NodeJS.Timeout) {
//     this._timerId = id;
//   }

//   public startTiming = () => {
//     this.timerId = setInterval(
//       () => this.tick(),
//       1000
//     );
//   };
//   public tick = () => {
//     const { dots } = this.state;
//     if (dots.length === 3) {
//       clearInterval(this.timerId);
//       this.setState({
//         dots: ''
//       });
//       this.startTiming();
//     }
//     else {
//       this.setState({
//         dots: dots + '.'
//       });
//     }
//   }

//   public render() {
//     const { dots } = this.state;
//     return(
//       <div className="spinner">
//         <p>
//           <img src={spinner} width="64px" height="auto" alt="Loading" />
//         </p>
//         <p className="loading">{`Loading ${dots}`}</p>
//       </div>
//     );
//   }
// }

// export default Spinner;