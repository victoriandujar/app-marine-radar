import React from 'react';

import { Container, TextMap } from './styles';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function Map({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Seção - Mapas`);

  return (
    <>
      <Header />
      <Container>
        <TextMap onPress={() => navigation.navigate('MapAnimals')}>
          Mapa de Animais
        </TextMap>
        <TextMap onPress={() => navigation.navigate('MapInstitutions')}>
          Mapa de Instituições
        </TextMap>
      </Container>
    </>
  );
}
