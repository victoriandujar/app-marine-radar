import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'react-native';
import { Container } from './styles';

import Header from '../../components/Header';

export default function Home({ navigation }) {
  return (
    <Container>
      <Header />

      <Text
        onPress={() => navigation.navigate('Explore')}
        style={styles.textMenu}
      >
        Animais
      </Text>
    </Container>
  );
}
