import React from 'react';

import { Text } from 'react-native';

import { Container, TAnimal } from './styles';

import Header from '../../components/Header';

export default function Animal() {
  return (
    <>
      <Header />
      <Container>
        <TAnimal>Orca</TAnimal>
      </Container>
    </>
  );
}
