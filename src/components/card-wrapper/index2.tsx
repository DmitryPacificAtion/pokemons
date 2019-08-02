// /* import React from 'react';
// import Card from "../card";
// // import Pagination from '../Pagination';
// // import Spinner from "../spinner";

// interface IState {
//   loading: boolean;
//   // handleLikeItem: () => void;
//   // pokemons: any;
//   // getData: () => void;
// }

// /*
//   getData: () => void;
//   pokemons: {
//     results: any[],
//   }
//   payload: {
//     results: any[];
//   };
//    */
// class CardWrapper extends React.Component<{}, IState> {
// /*   public componentWillMount() {
//     this.props.getData();
//   } */

//   public render() {
//     let { loading } = this.state;
//     // let content: JSX.Element[] = [];
//     // if (pokemons.results !== undefined) {
//     //   content = pokemons.results.map(i => {
//     //     let id = i.url.match('[^\\w]\\d+')[0].match('\\d+')[0];

//         /* <Card key={i.url}
//             onSelectHandler={handleLikeItem}
//             selectedItems={this.props.selectedItems}
//             url={i.url}
//             id={id}
//             title={`${i.name} ${id}`}
//             onClickHandler={this.props.getData}
//           />
//         return ( <div>Card {`${id}`}</div>);
//       })
//     }*/
//     const spinner = <div>Spinner</div>;
//     const content = <div>Content</div>;
//     return (
//       <main>
//         <div className="figure-wrapper">
//           {loading ? spinner : content}
//         </div>
//         {/* <Pagination /> */}
//         <button className="preloader" type="button"
//           onClick={() => alert("What is that?  this.props.getData(this.props.pokemons.next)")}>Load More
//         </button>
//       </main>
//     );
//   }

// export default CardWrapper;