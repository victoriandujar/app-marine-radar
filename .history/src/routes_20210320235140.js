import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigation } from 'react-navigation-drawer';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Animais from '~/pages/Animals';

const Routes = createAppContainer(
  createSwitchNavigator({
    Explore,
    Home,
  })
);

export Default Routes;
