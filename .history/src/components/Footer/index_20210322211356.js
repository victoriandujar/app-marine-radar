import React from 'react';

import { Text } from 'react-native';
import { Container } from './styles';

export default function Footer({ navigation }) {
  return (
    <Container>
      <Text onPress={() => navigation.navigate('Animals')}>Teste</Text>
    </Container>
  );
}
