import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, TextMapAnimals } from './styles';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { useTitle } from '~/context/title';

export default function MapAnimals({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle(`Mapa - Avistamentos`);
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Header />
      <Container>
        <TextMapAnimals>Mapa Avistamentos</TextMapAnimals>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
