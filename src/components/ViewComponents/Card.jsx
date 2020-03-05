import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import '../../style/scss/Card.scss';
import imgError from './ImgError';

class Card extends React.Component {
  clickHandler = (e) => {
    const { pokemon, add } = this.props;
    e.stopPropagation();
    add(pokemon.name, pokemon.id);
  };

  render() {
    const {
      pokemon,
      srcImg,
      history,
    } = this.props;
    return (
      <div className="row">
        <div className="col s12 m4 l3 center-align">
          <div
            role="link"
            tabIndex={0}
            className="card waves-effect hoverable "
            onKeyPress={() => {
              history.push(`/pokemon/${pokemon.id}`);
            }}
            onClick={() => {
              history.push(`/pokemon/${pokemon.id}`);
            }}
          >
            <div className="card-image">
              <img
                alt="pokemon"
                className="cardImg"
                src={srcImg}
                onError={(e) => imgError(e)}
              />
              <button
                type="button"
                className={`btn-floating halfway-fab waves-effect waves-light red ${
                  pokemon.isMy ? 'disabled' : ''
                }`}
                onClick={(e) => this.clickHandler(e)}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
            <div className="card-content">{pokemon.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    isMy: PropTypes.bool,
  }).isRequired,
  srcImg: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Card);
