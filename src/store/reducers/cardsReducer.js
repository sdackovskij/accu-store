import {
  AXIOS_DATA_LOAD,
  END_OF_DATA,
  AXIOS_DATA_LOADING,
  RESET_PAGE,
  ADD_TO_MY_POKEDEX,
  TOTAL_AMOUNT,
} from '../actions/actionTypes';

const initialState = {
  pokemons: [],
  onCurentPage: 8,
  endOfList: '',
  loading: false,
  total: '0',
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case AXIOS_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case TOTAL_AMOUNT: {
      return {
        ...state,
        total: action.total,
      };
    }

    case AXIOS_DATA_LOAD: {
      return {
        ...state,
        pokemons: action.db.data,
        onCurentPage: state.onCurentPage + 8,
        loading: false,
      };
    }

    case END_OF_DATA: {
      return {
        ...state,
        endOfList: action.loadMoreButton,
      };
    }

    case ADD_TO_MY_POKEDEX: {
      const myPokemon = state
        .pokemons
        .map((item) => (`${item.id}` === `${action.payload.id}`
          ? { ...item, isMy: action.payload.isMy, date: action.payload.date }
          : item
        ));

      return {
        ...state,
        pokemons: myPokemon,
      };
    }

    case RESET_PAGE: {
      return {
        ...state,
        pokemons: [],
        onCurentPage: 8,
        endOfList: '',
      };
    }

    default: {
      return state;
    }
  }
}
