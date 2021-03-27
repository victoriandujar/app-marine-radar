import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

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
