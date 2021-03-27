import React from 'react';

import { StatusBar } from 'react-native';
import { Wrapper, Container, TAnimal } from './styles';

import Footer from '~/components/Footer';

export default function Animal({ navigation }) {
  return (
    <Wrapper>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <TAnimal>Orca</TAnimal>
        <TAnimal>Orca</TAnimal>
      </Container>
      <Footer navigation={navigation} />
    </Wrapper>
  );
}
