import React from 'react';
import PropTypes from 'prop-types';
import imgError from './ImgError';
import '../../style/scss/Card.scss';


const OnePokemon = ({ match, pokemons }) => {
  const ID = Number(match.params.id);
  const pokemon = pokemons.find((item) => item.id === ID);
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img
              alt="pokemon"
              src={`http://localhost:3000/pokemons/${ID}.png`}
              onError={(e) => imgError(e)}
            />
            <span className="card-title" />
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="card-panel teal">
          <h2 className="white-text">
            {pokemon.name}
            {' '}
          </h2>
          <h4 className="white-text">
            Pokemon ID:
            {ID}
            {' '}
          </h4>
          <h4 className="white-text">
            Status:
            {pokemon.isMy ? `Caught ${new Date((pokemon.date)).toLocaleDateString()}` : 'Not caught'}
            {' '}
          </h4>
        </div>
      </div>
    </div>
  );
};

OnePokemon.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      date: PropTypes.date,
      isMy: PropTypes.bool,
    }),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default OnePokemon;
