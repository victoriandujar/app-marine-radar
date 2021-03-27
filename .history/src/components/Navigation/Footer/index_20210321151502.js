import React from 'react';

import { SafeAreaView, Text } from 'react-native';

import { Container, Menu } from './styles';

export default function Footer({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Menu>
          <Text onPress={() => navigation.navigate('Home')}>Home</Text>
        </Menu>
      </Container>
    </SafeAreaView>
  );
}
