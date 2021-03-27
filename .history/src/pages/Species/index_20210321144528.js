import React from 'react';

import { Text } from 'react-native';

import Header from '../../components/Header';

import { Container, TextAnimal } from './styles';

import { useTitle } from '~/context/title';

export default function Especies({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle('Espécies - Baleias');

  return (
    <>
      <Header />
      <Container>
        <TextAnimal onPress={() => navigation.navigate('Animal')}>
          Animal
        </TextAnimal>
      </Container>
    </>
  );
}
