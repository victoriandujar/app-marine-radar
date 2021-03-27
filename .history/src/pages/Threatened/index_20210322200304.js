import React from 'react';

import { Text } from 'react-native';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function Threatened() {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Instituições`);
  return (
    <>
      <Header />
      <Text>Mapa de Instituições</Text>
    </>
  );
}
