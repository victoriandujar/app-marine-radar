import React from 'react';

import { StatusBar } from 'react-native';
import { Container, TextMapAnimals } from './styles';

import Header from '~/components/Header';

import { useTitle } from '~/context/title';

export default function MapAnimals() {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Avistamentos`);
  return (
    <>
      <Header />
      <Container>
        <TextMapAnimals>Mapa Avistamentos</TextMapAnimals>
      </Container>
    </>
  );
}
