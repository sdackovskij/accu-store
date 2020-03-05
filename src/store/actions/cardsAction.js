import axios from 'axios';
import {
  AXIOS_DATA_LOAD,
  AXIOS_DATA_LOADING,
  TOTAL_AMOUNT,
} from './actionTypes';


export function isTotal(total) {
  return {
    type: TOTAL_AMOUNT,
    total,
  };
}

export function loadingStart() {
  return {
    type: AXIOS_DATA_LOADING,
  };
}

export function axiosDataLoad(db) {
  return {
    type: AXIOS_DATA_LOAD,
    db,
  };
}


export function axiosData(onPage) {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(`http://localhost:3000/pokemons?_page=1&_limit=${onPage}`)
      .then((db) => {
        dispatch(axiosDataLoad(db));
        Object
          .entries(db.headers)
          .filter(([headerKey]) => headerKey === 'x-total-count')
          .forEach(([, headerVal]) => dispatch(isTotal(headerVal)));
      });
  };
}

export function axiosDataMyPokemons(onPage) {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get(`http://localhost:3000/my_pokemons?_page=1&_limit=${onPage}`)
      .then((db) => {
        dispatch(axiosDataLoad(db));
        Object
          .entries(db.headers)
          .filter(([headerKey]) => headerKey === 'x-total-count')
          .forEach(([, headerVal]) => dispatch(isTotal(headerVal)));
      });
  };
}
