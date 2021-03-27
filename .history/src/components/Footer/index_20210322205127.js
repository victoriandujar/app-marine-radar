import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from 'react-native-vector-icons';

import Home from '~/pages/Home';
import Animals from '~/pages/Animals';

const TabNavigator = createBottomNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <FontAwesome5 name="book-medical" size={24} color="#000" />
        ),
      },
    },
  },
  {
    toBarOptions: {
      showLabel: false,
    },
  }
);
