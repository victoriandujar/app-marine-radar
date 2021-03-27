import React from 'react';

import { Text } from 'react-native';

export default function Footer() {
  return <Text onPress={() => navigation.navigate('Home')}>Testee</Text>;
}
