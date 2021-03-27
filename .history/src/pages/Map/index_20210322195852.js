import React from 'react';

import { View, Text } from 'react-native';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function Map() {
  const { setTitle } = useTitle('');
  setTitle(`Seção - Mapas`);

  return (
    <View>
      <Text>Mapa de Animais</Text>
      <Text>Mapa de Instituições</Text>
    </View>
  );
}
