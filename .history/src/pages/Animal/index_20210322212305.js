import React from 'react';

import { StatusBar } from 'react-native';
import { Container, TAnimal } from './styles';

export default function Animal() {
  return (
    <>
      <StatusBar barSyle="light-content" backgroundColor="#0A4BF1" />
      <Container>
        <TAnimal>Orca</TAnimal>
      </Container>
    </>
  );
}
