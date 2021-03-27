import React from 'react';

import { Container, TextAnimal } from './styles';

import { useTitle } from '~/context/title';

import Header from '~/components/Header';

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
