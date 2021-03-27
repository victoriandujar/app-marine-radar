import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Animals from '~/pages/Animals';
import Species from '~/pages/Species';

export default () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Home,
          Explore,
        }),
        App: createBottomTabNavigator(
          {
            Box: {
              screen: createStackNavigator(
                {
                  Animals,
                  Species,
                },
                {
                  defaultNavigationOptions: ({ navigation }) => ({
                    headerTransparent: true,
                    headerTintColor: '#000',
                    headerLeft: () => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.goBack();
                        }}
                      >
                        <Icon name="chevron-left" size={20} color="#000" />
                      </TouchableOpacity>
                    ),
                  }),
                }
              ),
              navigationOptions: () => ({
                tabBarLabel: 'Animais',
                activeTintColor: '#0670e1',
                inactiveTintColor: '#999999',

                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={25} color={tintColor} />
                ),
              }),

              navigationOptions2: () => ({
                tabBarLabel: 'Espécies',
                activeTintColor: '#0670e1',
                inactiveTintColor: '#999999',

                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={25} color={tintColor} />
                ),
              }),
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#0670e1',
              inactiveTintColor: '#999999',
              labelStyle: {
                fontSize: 14,
              },
              style: {
                backgroundColor: '#fff',
                height: 70,
                paddingTop: 10,
                paddingBottom: 10,
                shadowColor: '#000',
                borderTopWidth: 1,
                borderTopColor: 'rgba(0,0,0,0.07)',
              },
            },
          }
        ),
      },
      {
        initialRouteName: 'App',
      }
    )
  );
