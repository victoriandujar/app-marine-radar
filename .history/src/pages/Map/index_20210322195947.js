import React from 'react';

import { View, Text } from 'react-native';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function Map({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Seção - Mapas`);

  return (
    <>
      <Header />
      <View>
        <Text onPress={() => navigation.navigate('MapAnimals')}>
          Mapa de Animais
        </Text>
        <Text>Mapa de Instituições</Text>
      </View>
    </>
  );
}
