import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  DrawerNavigator,
} from 'react-navigation';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
      }),
    })
  );
