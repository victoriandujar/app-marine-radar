import React from 'react';

import { StatusBar } from 'react-native';
import { Container, TAnimal } from './styles';

import Footer from '~/components/Footer';

export default function Animal({ navigation }) {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <TAnimal>Orca</TAnimal>
      </Container>
      <Footer navigation={navigation} />
    </>
  );
}
