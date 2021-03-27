import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'react-native';
import { Container } from './styles';

import Header from '../../components/Header';

import { useTitle } from '~/context/title';

export default function Home({ navigation }) {
  const { setTitle } = useTitle('');

  setTitle(`Explorar`);
  return (
    <Container>
      <Header />

      <Text onPress={() => navigation.navigate('Animals')}>Animais</Text>
    </Container>
  );
}
