class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  render() {
    let heart = (this.props.wasSelected || this.state.hovered) ? redLike : blackLike;
    let { title, url, onClickHandler } = this.props;
    return (
      <figure className="pokemon-card">
        <div className="preview">
          <img
            src={defaultPng}
            alt="Pokemon 0" width="120" height="120" />
        </div>
        <h2 className="title">
          <a href='#' onClick={(e) => {
            e.preventDefault();
            onClickHandler(url)
          }}>{title}</a>
        </h2>
        <button className="type green-btn">Grass</button>
        <div className="like">
          <a href="#">
            <img src={heart}
              onClick={this.props.selectItem}
              onMouseOver={() => this.setState({ hovered: true })}
              onMouseOut={() => this.setState({ hovered: false })}
              width="32" height="auto"
              alt="Like" />
          </a>
        </div>
      </figure>
    );
  }
}

export default Card;