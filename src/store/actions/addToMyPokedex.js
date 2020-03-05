import axios from 'axios';
import { ADD_TO_MY_POKEDEX } from './actionTypes';


export function afterAddToMyPokedex(payload) {
  return {
    type: ADD_TO_MY_POKEDEX,
    payload,
  };
}

export function addToMyPokedex(pokemonName, pokemonId) {
  return (dispatch) => {
    const payload = {
      name: pokemonName,
      id: pokemonId,
      isMy: true,
      date: new Date(),
    };
    axios
      .put(`http://localhost:3000/pokemons/${pokemonId}`, {
        name: payload.name,
        id: payload.id,
        isMy: payload.isMy,
        date: payload.date,
      })
      .then(() => {
        dispatch(afterAddToMyPokedex(payload));
      });

    axios.post('http://localhost:3000/my_pokemons', {
      name: payload.name,
      id: payload.id,
      isMy: payload.isMy,
      date: payload.date,
    });
  };
}
