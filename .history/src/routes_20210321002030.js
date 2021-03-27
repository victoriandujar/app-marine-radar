import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Animals from '~/pages/Animals';
import Species from '~/pages/Species';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        Explore,
        Home,
        Animals,
        Species,
      }),
    })
  );
