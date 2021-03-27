import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomNavigator } from 'react-navigation-tabs';

import Home from '~/pages/Home';
import Animals from '~/pages/Animals';

export default function FooterMenu({ navigation }) {
  return <Text onPress={() => navigation.navigate('Animals')}>Teste</Text>;
}
