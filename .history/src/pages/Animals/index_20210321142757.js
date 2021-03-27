import React from 'react';

import { Text } from 'react-native';
import Header from '../../components/Header';

import { useTitle } from '~/context/title';

export default function Animals() {
  const { setTitle } = useTitle('');
  setTitle(`Animais`);
  return (
    <>
      <Header />
      <Text>Animais</Text>
    </>
  );
}
