import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  DrawerNavigator,
} from 'react-navigation';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Animals from '~/pages/Animals';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
      }),
      MenuDrawer: DrawerNavigator({
        Animals,
      }),
    })
  );
