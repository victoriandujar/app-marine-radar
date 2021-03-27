import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from '~/pages/Home';
import Explore from '~/pages/Explore';
import Animals from '~/pages/Animals';

export default (isSigned = false) =>
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
                  Animals
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
              navigationOptions: () => ({
                tabBarLabel: 'Box',
                activeTintColor: '#0670e1',
                inactiveTintColor: '#999999',

                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={25} color={tintColor} />
                ),
              }),
            },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
