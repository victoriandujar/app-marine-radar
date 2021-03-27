import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import { Container, Menu } from './styles';

export default function Footer({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Menu>
          <Text onPress={() => navigation.navigate('Home')}>Home</Text>
          <Text onPress={() => navigation.navigate('Animals')}>Animais</Text>
          <Text onPress={() => navigation.navigate('Mapa')}>Mapa</Text>
          <Text onPress={() => navigation.navigate('Amecados')}>Ameaçados</Text>
        </Menu>
      </Container>
    </SafeAreaView>
  );
}
