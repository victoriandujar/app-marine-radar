import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import { Container, Menu } from './styles';

export default function Footer() {
  return (
    <SafeAreaView>
      <Container>
        <Menu>
          <Text>Home</Text>
          <Text>Animais</Text>
          <Text>Mapa</Text>
          <Text>Ameaçados</Text>
        </Menu>
      </Container>
    </SafeAreaView>
  );
}
