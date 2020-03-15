import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/ViewComponents/MaterialUi/Paperbase';
import MyPokemons from '../container/MyPokemonsContainer';
import Pokedex from '../container/PokedexContainer';
import OnePokemon from '../container/OnePokemonContainer';
import MainPage from '../components/LayoutComponents/MainPage/MainPageLayout';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/my-pokedex" component={MyPokemons} />
      <Route path="/pokemon/:id" component={OnePokemon} />
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Layout>
);

export default App;
