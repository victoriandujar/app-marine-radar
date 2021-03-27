import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

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
      App: createBottomTabNavigator(
        {
          Box: {
            screen: createStackNavigator(
              {
                Box,
                Detail,
                NewProblem,
                Problems,
                Confirm,
                Objects,
                NewObject,
              },
              {
                defaultNavigationOptions: ({ navigation }) => ({
                  headerTransparent: true,
                  headerTintColor: '#fff',
                  headerLeftContainerStyle: {
                    marginLeft: 15,
                    paddingTop: 20,
                  },
                  headerTitleStyle: {
                    paddingTop: 150,
                  },
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.goBack();
                      }}
                    >
                      <Icon name="chevron-left" size={20} color="#fff" />
                    </TouchableOpacity>
                  ),
                }),
              }
            ),
    })
  );
