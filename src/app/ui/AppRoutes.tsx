import React from 'react';
import { Route, Switch } from 'react-router';

import { globalConfig } from '@shared/config';

import { MainWidget } from '@widgets/main';

import {
  ComparesPokemonPage,
  HomePage,
  PokemonItemPage,
  PokemonsListPage,
} from '@pages';

/**
 * Компонент с роутами приложения
 *
 * @returns {JSX.Element} Компонент с роутами приложения
 */
export const AppRoutes: React.FC = () => (
  <MainWidget>
    <Switch>
      <Route exact path={globalConfig.routes.home()} component={HomePage} />
      <Route
        exact
        path={globalConfig.routes.compare()}
        component={ComparesPokemonPage}
      />
      <Route
        exact
        path={globalConfig.routes.pokemons()}
        component={PokemonsListPage}
      />
      <Route
        exact
        path={globalConfig.routes.pokemon()}
        component={PokemonItemPage}
      />
    </Switch>
  </MainWidget>
);
