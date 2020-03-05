import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../components/LayoutComponents/PageLayout';
import MyPokemons from '../container/MyPokemonsContainer';
import Pokedex from '../container/PokedexContainer';
import OnePokemon from '../container/OnePokemonContainer';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/my-pokedex" component={MyPokemons} />
      <Route path="/pokemon/:id" component={OnePokemon} />
      <Route path="/" component={Pokedex} />
    </Switch>
  </Layout>
);

export default App;
