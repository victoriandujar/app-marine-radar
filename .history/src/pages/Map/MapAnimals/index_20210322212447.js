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
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextMapAnimals>Mapa Avistamentos</TextMapAnimals>
      </Container>
    </>
  );
}
