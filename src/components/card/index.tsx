import React from 'react';
import './styles.scss';
const defaultPng = './icons/default.png';

interface IProps {
  wasSelected: boolean;
  onClickHandler: (url: string) => void;
  title: string;
  url: string;
  // handleSelect: (id: number) => void;
}

class Card extends React.Component<IProps> {
  public render() {
    const { title, url, onClickHandler, wasSelected } = this.props;
    const cx = `like ${wasSelected ? 'selected' : ''}`;

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
        <div className={cx} />
      </figure>
    );
  }
}

export default Card;
