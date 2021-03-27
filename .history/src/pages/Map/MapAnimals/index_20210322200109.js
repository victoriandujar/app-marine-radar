import React from 'react';

import { Text } from 'react-native';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function MapAnimals() {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Avistamentos`);
  return (
    <>
      <Header />
      <Text>Mapa Animais</Text>
    </>
  );
}
