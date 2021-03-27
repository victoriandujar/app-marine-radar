import React from 'react';

import { createAppContainer } from 'react-navigation';

export default function FooterMenu({ navigation }) {
  return <Text onPress={() => navigation.navigate('Animals')}>Teste</Text>;
}
