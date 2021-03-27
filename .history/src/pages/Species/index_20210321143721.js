import React from 'react';

import { Text } from 'react-native';

import Header from '../../components/Header';

import { useTitle } from '~/context/title';

export default function Especies({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle('Espécies - Baleias');

  return (
    <>
      <Header />
      <Text>Espécies</Text>
      <Text onPress={() => navigation.navigate('Animal')}>Animal</Text>
    </>
  );
}
