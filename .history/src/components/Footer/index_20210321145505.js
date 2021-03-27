import React from 'react';

import { View, SafeAreaView, Text } from 'react-native';

import { Container } from './styles';

export default function Header() {
  return (
    <SafeAreaView>
      <Container>
        <Text>Olá</Text>
      </Container>
    </SafeAreaView>
  );
}
