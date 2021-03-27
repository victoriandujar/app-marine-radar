import React from 'react';

import { Text } from 'react-native';

export default function Footer({ navigation }) {
  return <Text onPress={() => navigation.navigate('Home')}>Testee</Text>;
}
