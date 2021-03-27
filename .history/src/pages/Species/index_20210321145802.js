import React from 'react';

import { Container, TextAnimal } from './styles';

import { useTitle } from '~/context/title';

export default function Especies({ navigation }) {
  const { setTitle } = useTitle('');
  setTitle('Espécies - Baleias');

  return (
    <>
      <Container>
        <TextAnimal onPress={() => navigation.navigate('Animal')}>
          Animal
        </TextAnimal>
      </Container>
    </>
  );
}
