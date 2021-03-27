import React from 'react';

import { Text } from 'react-native';

export default function FooterMenu({ navigation }) {
  return <Text onPress={() => navigation.navigate('Animals')}>Teste</Text>;
}
