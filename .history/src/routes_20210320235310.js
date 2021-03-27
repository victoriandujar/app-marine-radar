import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
// import Animais from '~/pages/Animals';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
      }),
    })
  );
