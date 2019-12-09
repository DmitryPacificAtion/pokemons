import React from 'react';
import './styles.scss';
const defaultPng = './default.png';
const blackLike = './like-black.svg';
const redLike = './like-red.svg';

interface IProps {
  wasSelected: boolean;
  onClickHandler: (url: string) => void;
  title: string;
  url: string;
  // handleSelect: (id: number) => void;
}

interface IState {
  hovered: boolean;
}

class Card extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  public render() {
    const { title, url, onClickHandler, wasSelected } = this.props;
    const { hovered } = this.state;
    const heart = wasSelected || hovered ? redLike : blackLike;
    return (
      <figure className="pokemon-card">
        <div className="preview">
          <img src={defaultPng} alt="Pokemon 0" width="120" height="120" />
        </div>
        <h2 className="title">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              onClickHandler(url);
            }}
          >
            {title}
          </a>
        </h2>
        <button className="type green-btn">Grass</button>
        <div className="like">
          <a href="#">
            <img
              onClick={() => {}}
              onMouseOver={() => this.setState({ hovered: true })}
              onMouseOut={() => this.setState({ hovered: false })}
              width="32"
              height="auto"
              alt="Like"
            />
          </a>
        </div>
      </figure>
    );
  }
}

export default Card;
